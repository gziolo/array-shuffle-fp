const compose = ( f, g ) => val => f( g( val ) );

const init = list => list.slice( 0, list.length - 1 );

const last = list => list[ list.length - 1 ];

const map = fn => list => list.map( fn );

const nth = n => list => list[ n ];

const updateMatchingValue = ( from, to ) => val => val === from ? to : val;

module.exports = {
	compose,
	init,
	last,
	map,
	nth,
	updateMatchingValue
};
