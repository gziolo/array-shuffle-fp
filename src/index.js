const {
	compose,
	init,
	last,
	length,
	map,
	updateMatchingValue
} = require( './fp' );
const { pickRandom } = require( './rand' );

function arrayShuffle( scratch, result = [] ) {
	if ( length( scratch ) < 2 ) {
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

	if ( length( input ) < 2 ) {
		return input;
	}

	return arrayShuffle( input );
};
