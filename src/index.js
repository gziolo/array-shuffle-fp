const {
	compose,
	concat,
	ifElse,
	init,
	last,
	length,
	lessThan,
	nth,
	prepend,
	trampoline,
	update
} = require( './fp' );
const { pickRandomIndex } = require( './rand' );

const lessThan2Elements = compose( lessThan( 2 ), length );

const arrayShuffleImpl = result => ifElse(
	lessThan2Elements,
	scratch => concat( scratch )( result ),
	( scratch ) => {
		const pickIndex = pickRandomIndex( scratch );
		const updatePickWithLast = compose( update( pickIndex ), last )( scratch );

		return () => arrayShuffleImpl(
			prepend( nth( pickIndex )( scratch ) )( result )
		)(
			compose( init, updatePickWithLast )( scratch )
		);
	}
);

const arrayShuffle = trampoline( arrayShuffleImpl( [] ) );

module.exports = function( input ) {
	if ( ! Array.isArray( input ) ) {
		throw new TypeError( 'Expected Array, got ' + typeof input );
	}

	if ( lessThan2Elements( input ) ) {
		return input;
	}

	return arrayShuffle( input );
};
