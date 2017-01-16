const arrayShuffle = require( '../' );

describe( 'arrayShuffle', () => {
	it( 'throws the exception when an invalid data provided', () => {
		expect( () => arrayShuffle( null ) ).toThrow();
	} );

	it( 'returns the same array when no items provided', () => {
		const input = Object.freeze( [] );

		const result = arrayShuffle( input );

		expect( result ).toBe( input );
	} );

	it( 'returns the same array when one item provided', () => {
		const input = Object.freeze( [ 'a' ] );

		const result = arrayShuffle( input );

		expect( result ).toBe( input );
	} );

	it( 'returns a different array containing the same items when unique items provided', () => {
		const input = Object.freeze( [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ] );

		const result = arrayShuffle( input );

		expect( result ).toHaveLength( 10 );
		expect( result ).toEqual( expect.arrayContaining( input ) );
		expect( result ).not.toEqual( input );
	} );

	it( 'returns a different array containing the same items when duplicated items provided', () => {
		const equals = a => b => a === b;
		const input = Object.freeze( [ 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b' ] );

		const result = arrayShuffle( input );

		expect( result ).toHaveLength( 10 );
		expect( result.filter( equals( 'a' ) ) ).toHaveLength( 5 );
		expect( result.filter( equals( 'b' ) ) ).toHaveLength( 5 );
		expect( result ).not.toEqual( input );
	} );

	it( 'shuffles properly 10 000 elements', () => {
		const bigInput = [ ...( new Array( 10000 ) ).keys() ];

		const result = arrayShuffle( bigInput );

		expect( result ).toHaveLength( 10000 );
		expect( result ).not.toEqual( bigInput );
	} );
} );
