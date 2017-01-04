# array-shuffle-fp [![Build Status](https://travis-ci.org/gziolo/array-shuffle-fp.svg?branch=master)](https://travis-ci.org/gziolo/array-shuffle-fp)
> Randomize the order of items in an array using FP style

Uses the [Fisher–Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).


## Install

```
$ npm install --save array-shuffle-fp
```


## Usage

```js
const arrayShuffle = require( 'array-shuffle-fp' );

const result = arrayShuffle( [ 'a', 'b', 'c', 'd', 'e' ] );

console.log( result );
// [ 'c', 'e', 'a', 'd', 'b' ]
```


## Test

```
npm test
```


## License

array-shuffle-fp is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).
