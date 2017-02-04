const append = el => list => [].concat( list, [ el ] );

const compose = ( f, g ) => val => f( g( val ) );

const flatten = list => list.reduce( ( a, b ) => [].concat( a, b ) );

const ifElse = ( condition, onTrue, onFalse ) => ( list ) => condition( list ) ? onTrue( list ) : onFalse( list );

const init = list => list.slice( 0, list.length - 1 );

const last = list => list[ list.length - 1 ];

const length = list => list.length;

const lessThan = limit => val => val < limit;

const map = fn => list => list.map( fn );

const nth = n => list => list[ n ];

const trampoline = fn => ( ...args ) => {
	let result = fn( ...args );

	while ( typeof result === 'function' ) {
		result = result();
	}

	return result;
};

const update = idx => x => list => {
	const res = [ ...list ];

	res[ idx ] = x;

	return res;
};

module.exports = {
	append,
	compose,
	flatten,
	ifElse,
	init,
	last,
	length,
	lessThan,
	map,
	nth,
	trampoline,
	update
};
