const { nth } = require( './fp' );

function pickRandom( list ) {
	const roll = Math.floor( Math.random() * list.length );

	return nth( roll )( list );
}

module.exports = {
	pickRandom
};
