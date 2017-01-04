const { last } = require( '../fp' );

describe( 'fp', () => {
	const input = [ 'a', 'b', 'c', 'd', 'e' ];

	describe( '#last', () => {
		it( 'returns the last element of an array', () => {
			const result = last( input );

			expect( result ).toBe( 'e' );
		} );
	} );
} );
