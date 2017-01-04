const arrayShuffle = require( '../' );

describe( 'arrayShuffle', () => {
	it( 'returns the same array when no items provided', () => {
		const input = [];

		const result = arrayShuffle( input );

		expect( result ).toBe( input );
	} );

	it( 'returns the same array when one item provided', () => {
		const input = [ 'a' ];

		const result = arrayShuffle( input );

		expect( result ).toBe( input );
	} );

	it( 'returns a different array when more than one item provided', () => {
		const input = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];

		const result = arrayShuffle( input );

		expect( result ).toHaveLength( 8 );
		expect( result ).not.toEqual( input );
	} );
} );
