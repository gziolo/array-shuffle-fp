const {
	init,
	last,
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

	describe( '#nth', () => {
		it( 'returns the n-th element of the the given list', () => {
			const result = nth( 3 )( input );

			expect( result ).toBe( 'd' );
		} );
	} );
} );
