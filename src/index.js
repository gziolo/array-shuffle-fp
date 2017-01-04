const {
	compose,
	init,
	last,
	map,
	updateMatchingValue
} = require( './fp' );
const { pickRandom } = require( './rand' );

function arrayShuffle( scratch, result = [] ) {
	if ( scratch.length < 2 ) {
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

	if ( input.length < 2 ) {
		return input;
	}

	return arrayShuffle( input );
};
