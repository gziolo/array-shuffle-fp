const {
	compose,
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

function arrayShuffle( scratch, result = [] ) {
	if ( lessThan2Elements( scratch ) ) {
		return [ ...scratch, ...result ];
	}

	const pickIndex = pickRandomIndex( scratch );
	const updatePickWithLast = update( pickIndex )( last( scratch ) );

	return () => arrayShuffle(
		compose( init, updatePickWithLast )( scratch ),
		[ nth( pickIndex )( scratch ), ...result ]
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
