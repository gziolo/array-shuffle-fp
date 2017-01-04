const arrayShuffle = require( '../' );

describe( 'arrayShuffle', () => {
	it( 'returns the equal array when no items provided', () => {
		const input = [];

		const result = arrayShuffle( input );

		expect( result ).toBe( input );
	} );

	it( 'returns the equal array when one item provided', () => {
		const input = [ 'a' ];

		const result = arrayShuffle( input );

		expect( result ).toBe( input );
	} );
} );
