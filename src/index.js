const {
	append,
	compose,
	flatten,
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

function arrayShuffle( scratch, result = [] ) {
	const prependToResult = compose( flatten, append( result ) );

	if ( lessThan2Elements( scratch ) ) {
		return prependToResult( scratch );
	}

	const pickIndex = pickRandomIndex( scratch );
	const updatePickWithLast = compose( update( pickIndex ), last )( scratch );

	return () => arrayShuffle(
		compose( init, updatePickWithLast )( scratch ),
		compose( prependToResult, compose( toArray, nth( pickIndex ) ) )( scratch )
	);
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
