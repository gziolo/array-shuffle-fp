# array-shuffle-fp [![Build Status](https://travis-ci.org/gziolo/array-shuffle-fp.svg?branch=master)](https://travis-ci.org/gziolo/array-shuffle-fp)
> Randomize the order of items in an array using FP style.

Uses the modern version of th [Fisher–Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm):

```{r, eval = FALSE}
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 downto 1 do
     j ← random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
```

## Install

```bash
$ npm install --save array-shuffle-fp
```

## Usage

```js
const arrayShuffle = require( 'array-shuffle-fp' );

const result = arrayShuffle( [ 'a', 'b', 'c', 'd', 'e' ] );

console.log( result ); // [ 'c', 'e', 'a', 'd', 'b' ]
```

## Test

```bash
$ npm test
```

## Support

Node.js 6+.


## License

array-shuffle-fp is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).
