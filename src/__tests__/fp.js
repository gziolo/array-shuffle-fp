const {
	compose,
	init,
	last,
	map,
	nth,
	updateMatchingValue
} = require( '../fp' );

describe( 'fp', () => {
	const input = Object.freeze( [ 'a', 'b', 'c', 'd', 'e' ] );
	const appendX = val => val + 'x';
	const toUpperCase = val => val.toUpperCase();

	describe( '#compose', () => {
		it( 'returns the last element upper-cased when composing toUpperCase and last', () => {
			const result = compose( toUpperCase, last )( input );

			expect( result ).toBe( 'E' );
		} );
	} );

	describe( '#init', () => {
		it( 'returns all but the last element of the given list', () => {
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
		it( 'returns the list with x appended to each element of the the given list', () => {
			const result = map( appendX )( input );

			expect( result ).toEqual( [ 'ax', 'bx', 'cx', 'dx', 'ex' ] );
		} );

		it( 'returns all elements upper-cased and with x appended when composing mapped appendX and mapped toUpperCase', () => {
			const result = compose( map( appendX ), map( toUpperCase ) )( input );

			expect( result ).toEqual( [ 'Ax', 'Bx', 'Cx', 'Dx', 'Ex' ] );
		} );

		it( 'returns all elements upper-cased and with x appended when mapping composed appendX and toUpperCase', () => {
			const result = map( compose( appendX, toUpperCase ) )( input );

			expect( result ).toEqual( [ 'Ax', 'Bx', 'Cx', 'Dx', 'Ex' ] );
		} );
	} );

	describe( '#nth', () => {
		it( 'returns the n-th element of the the given list', () => {
			const result = nth( 3 )( input );

			expect( result ).toBe( 'd' );
		} );
	} );

	describe( '#updateValue', () => {
		it( 'returns the same value when the value to compare differs', () => {
			const result = updateMatchingValue( 'a', 'b' )( 'c' );

			expect( result ).toBe( 'c' );
		} );

		it( 'returns replacement value when the value to compare matches', () => {
			const result = updateMatchingValue( 'a', 'b' )( 'a' );

			expect( result ).toBe( 'b' );
		} );
	} );
} );
