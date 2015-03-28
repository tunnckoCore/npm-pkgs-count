## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Count npm user packages from [npmjs.com](http://npm.im) website profile. API and CLI.

## Install
```
npm i --save npm-pkgs-count
npm test
npm-pkgs-count --help
```


## API
> For more use-cases see the [tests](./test.js)

### [npmPkgsCount](./index.js#L41)
> Count packages of the given [npmjs.com](http://npm.im) user

- `<username>` **{String}**  non emptry string, npm username
- `<callback>` **{Function}** node-style callback `(err, res)`

**Example**
```js
var npmPkgsCount = require('npm-pkgs-count');

npmPkgsCount('tunnckocore', function _cb(err, cnt) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(cnt);
  //=> 96

  console.log(typeof cnt);
  //=> number
});
```


## CLI
> run `npm-pkgs-count --help` or try this one

```
npm i -g npm-pkgs-count

npm-pkgs-count tunnckocore

  Aloha, master!

  ℹ Please wait a moment...
  ℹ We fetching data from https://www.npmjs.com

  ✔ 96 packages by tunnckocore

```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/npm-pkgs-count
[npmjs-img]: https://img.shields.io/npm/v/npm-pkgs-count.svg?style=flat&label=npm-pkgs-count

[coveralls-url]: https://coveralls.io/r/tunnckoCore/npm-pkgs-count?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/npm-pkgs-count.svg?style=flat

[license-url]: https://github.com/tunnckoCore/npm-pkgs-count/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/npm-pkgs-count
[travis-img]: https://img.shields.io/travis/tunnckoCore/npm-pkgs-count.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/npm-pkgs-count
[daviddm-img]: https://img.shields.io/david/tunnckoCore/npm-pkgs-count.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/npm-pkgs-count/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 28, 2015_
