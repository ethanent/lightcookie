<p align="center" style="text-align: center;"><img src="https://raw.githubusercontent.com/ethanent/lightcookie/4fdf48278e34f3b2aa75b644271da8a3fddb792b/media/lightcookie-textIncluded.png" width="300" alt="lightcookie logo"/></p>

---

> Super lightweight cookie parser and serializer

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

## Why lightcookie?

lightcookie is super lightweight. It's over much more lightweight than cookie, another popular cookie package. lightcookie is the way to go for efficiency as it parses using JS regular expressions!

## Documentation

Have a look at [the full documentation](https://ethanent.github.io/lightcookie/) for details about using the library!
