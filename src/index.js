const {
	init,
	last,
	map,
	updateMatchingValue
} = require( './fp' );
const { pickRandom } = require( './rand' );

function arrayShuffle( scratch ) {
	scratch = [ ...scratch ];
	let result = [];

	while ( scratch.length ) {
		const pick = pickRandom( scratch );
		scratch = map( updateMatchingValue( pick, last( scratch ) ) )( init( scratch ) );
		result = [ pick, ...result ];
	}

	return result;
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
