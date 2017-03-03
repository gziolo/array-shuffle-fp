const { length, } = require( './fp' );

const pickRandomIndex = list => Math.floor(
	Math.random() * length( list )
);

module.exports = {
	pickRandomIndex
};
