const {
	compose,
	init,
	last,
	length,
	lessThan,
	map,
	updateMatchingValue
} = require( './fp' );
const { pickRandom } = require( './rand' );

const lessThan2Elements = compose( lessThan( 2 ), length );

function arrayShuffle( scratch, result = [] ) {
	if ( lessThan2Elements( scratch ) ) {
		return [ ...scratch, ...result ];
	}

	const pick = pickRandom( scratch );
	const updateMatchingPickWithLast = updateMatchingValue( pick, last( scratch ) );

	return arrayShuffle(
		compose( map( updateMatchingPickWithLast ), init )( scratch ),
		[ pick, ...result ]
	);
}

module.exports = function( input ) {
	if ( ! Array.isArray( input ) ) {
		throw new TypeError( 'Expected Array, got ' + typeof input );
	}

	if ( lessThan2Elements( input ) ) {
		return input;
	}

	return arrayShuffle( input );
};
