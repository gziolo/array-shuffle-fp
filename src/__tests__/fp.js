const {
	init,
	last,
	map,
	nth
} = require( '../fp' );

describe( 'fp', () => {
	const input = Object.freeze( [ 'a', 'b', 'c', 'd', 'e' ] );

	describe( '#init', () => {
		it( 'returns all but the last element of the given list ', () => {
			const result = init( input );

			expect( result ).toEqual( [ 'a', 'b', 'c', 'd' ] );
		} );
	} );

	describe( '#last', () => {
		it( 'returns the last element of the the given list', () => {
			const result = last( input );

			expect( result ).toBe( 'e' );
		} );
	} );

	describe( '#map', () => {
		it( 'returns the list with the function applied to each item of the the given list', () => {
			const result = map( item => item + 'x' )( input );

			expect( result ).toEqual( [ 'ax', 'bx', 'cx', 'dx', 'ex' ] );
		} );
	} );

	describe( '#nth', () => {
		it( 'returns the n-th element of the the given list', () => {
			const result = nth( 3 )( input );

			expect( result ).toBe( 'd' );
		} );
	} );
} );
