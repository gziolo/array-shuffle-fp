const {
	compose,
	concat,
	flip,
	ifElse,
	init,
	last,
	length,
	lessThan,
	map,
	nth,
	prepend,
	update
} = require( '../fp' );

describe( 'fp', () => {
	const input = Object.freeze( [ 'a', 'b', 'c', 'd', 'e' ] );
	const appendX = val => val + 'x';
	const toUpperCase = val => val.toUpperCase();
	const throwError = () => {
		throw new Error();
	};

	describe( '#compose', () => {
		it( 'returns the last element upper-cased when composing toUpperCase and last', () => {
			const result = compose( toUpperCase, last )( input );

			expect( result ).toBe( 'E' );
		} );
	} );

	describe( '#concat', () => {
		it( 'returns the result of concatenating the given lists', () => {
			const result = concat( input )( [ 'f' ] );

			expect( result ).toEqual( [ 'a', 'b', 'c', 'd', 'e', 'f' ] );
		} );
	} );

	describe( '#flip', () => {
		it( 'returns a new function with the first two params order reversed', () => {
			const result = flip( concat )( [ 'f' ] )( input );

			expect( result ).toEqual( [ 'a', 'b', 'c', 'd', 'e', 'f' ] );
		} );
	} );

	describe( '#ifElse', () => {
		it( 'will process the onTrue function when the result of the condition predicate is true', () => {
			const result = ifElse( list => length( list ) > 0, last, throwError )( input );

			expect( result ).toBe( 'e' );
		} );

		it( 'will process the onFalse function when the result of the condition predicate is false', () => {
			const result = ifElse( list => length( list ) > 100, throwError, last )( input );

			expect( result ).toBe( 'e' );
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

	describe( '#lenght', () => {
		it( 'returns the lenght of the the given list', () => {
			const result = length( input );

			expect( result ).toBe( 5 );
		} );
	} );

	describe( '#lessThan', () => {
		it( 'returns false when value greater than limit provided', () => {
			const result = lessThan( 5 )( 33 );

			expect( result ).toBe( false );
		} );

		it( 'returns false when value equal to limit provided', () => {
			const result = lessThan( 5 )( 5 );

			expect( result ).toBe( false );
		} );

		it( 'returns thrue when value lower than limit provided', () => {
			const result = lessThan( 5 )( 3 );

			expect( result ).toBe( true );
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

	describe( '#prepend', () => {
		it( 'returns a new list with the given element at the front, followed by the contents of the list', () => {
			const result = prepend( 'z' )( input );

			expect( result ).toEqual( [ 'z', 'a', 'b', 'c', 'd', 'e' ] );
		} );
	} );

	describe( '#update', () => {
		it( 'returns a new copy of the list with the element at the provided index replaced with the given value', () => {
			const result = update( 1 )( 'val' )( input );

			expect( result ).toEqual( [ 'a', 'val', 'c', 'd', 'e' ] );
		} );
	} );
} );
