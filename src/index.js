function arrayShuffle( input ) {
	const scratch = [ ...input ];
	let range = input.length;
	let result = [];

	while ( range ) {
		const roll = Math.floor( Math.random() * range );
		const pick = scratch[ roll ];
		range -= 1;
		const last = scratch[ range ];
		if ( pick !== last ) {
			scratch[ roll ] = last;
		}
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
