# lightcookie
> Super lightweight cookie parser and serializer

---

[Full documentation](https://ethanent.github.io/lightcookie/) | [GitHub](https://github.com/ethanent/lightcookie) | [NPM](https://www.npmjs.com/package/lightcookie)

## Installation

```shell
npm i --save lightcookie
```

## Parsing cookie strings

```javascript
const lightcookie = require('lightcookie')

lightcookie.parse('foo=bar; copyright=%C2%A9;another=test') // {foo: 'bar', copyright: '©', another: 'test'}
```

## Serializing objects to cookie strings

```javascript
lightcookie.serialize({
	name: 'Ethan',
	'HttpOnly': null
}) // 'name=Ethan;HttpOnly'
```

## Documentation

Have a look at [the full documentation](https://ethanent.github.io/lightcookie/) for details about using the library!