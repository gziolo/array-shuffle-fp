const init = list => list.slice( 0, list.length - 1 );

const last = list => list[ list.length - 1 ];

const map = fn => list => list.map( fn );

const nth = n => list => list[ n ];

module.exports = {
	init,
	last,
	map,
	nth
};
