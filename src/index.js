const {
	compose,
	concat,
	flip,
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
	flip( concat )( result ),
	( scratch ) => {
		const pickIndex = pickRandomIndex( scratch );
		const pick = nth( pickIndex )( scratch );
		const updatePickWithLast = compose(
			update( pickIndex ), last
		)( scratch );

		return () => arrayShuffleImpl(
			prepend( pick )( result )
		)(
			compose(
				init, updatePickWithLast
			)( scratch )
		);
	}
);

const arrayShuffle = trampoline(
	arrayShuffleImpl( [] )
);

module.exports = function( input ) {
	if ( ! Array.isArray( input ) ) {
		throw new TypeError( 'Expected Array, got ' + typeof input );
	}

	if ( lessThan2Elements( input ) ) {
		return input;
	}

	return arrayShuffle( input );
};
