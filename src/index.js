const {
	append,
	compose,
	flatten,
	ifElse,
	init,
	last,
	length,
	lessThan,
	nth,
	trampoline,
	update
} = require( './fp' );
const { pickRandomIndex } = require( './rand' );

const lessThan2Elements = compose( lessThan( 2 ), length );
const toArray = a => [ a ];

function arrayShuffle( input, result = [] ) {
	const prependToResult = compose( flatten, append( result ) );

	return ifElse(
		lessThan2Elements,
		prependToResult,
		( scratch ) => {
			const pickIndex = pickRandomIndex( scratch );
			const updatePickWithLast = compose( update( pickIndex ), last )( scratch );

			return () => arrayShuffle(
				compose( init, updatePickWithLast )( scratch ),
				compose( prependToResult, compose( toArray, nth( pickIndex ) ) )( scratch )
			);
		}
	)( input );
}

module.exports = function( input ) {
	if ( ! Array.isArray( input ) ) {
		throw new TypeError( 'Expected Array, got ' + typeof input );
	}

	if ( lessThan2Elements( input ) ) {
		return input;
	}

	return trampoline( arrayShuffle )( input );
};
