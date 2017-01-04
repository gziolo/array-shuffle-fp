const {
	last,
	nth
} = require( '../fp' );

describe( 'fp', () => {
	const input = [ 'a', 'b', 'c', 'd', 'e' ];

	describe( '#last', () => {
		it( 'returns the last element of an array', () => {
			const result = last( input );

			expect( result ).toBe( 'e' );
		} );
	} );

	describe( '#nth', () => {
		it( 'returns the n-th element of an array', () => {
			const result = nth( 3 )( input );

			expect( result ).toBe( 'd' );
		} );
	} );
} );
