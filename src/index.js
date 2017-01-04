const {
	init,
	last,
	map,
	nth,
	updateMatchingValue
} = require( './fp' );

function arrayShuffle( input ) {
	let scratch = [ ...input ];
	let result = [];

	while ( scratch.length ) {
		const roll = Math.floor( Math.random() * scratch.length );
		const pick = nth( roll )( scratch );
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
