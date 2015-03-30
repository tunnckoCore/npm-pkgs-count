/**
 * npm-pkgs-count <https://github.com/tunnckoCore/npm-pkgs-count>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('assert-kindof');
var got = require('got');
var cheerio = require('cheerio');

var url = 'https://www.npmjs.com/~';
var selector = '#packages';

/**
 * > Count packages of the given [npmjs.com](http://npm.im) user
 *
 * **Example**
 * ```js
 * var npmPkgsCount = require('npm-pkgs-count');
 *
 * npmPkgsCount('tunnckocore', function _cb(err, cnt) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *   console.log(cnt);
 *   //=> 96
 *
 *   console.log(typeof cnt);
 *   //=> number
 * });
 * ```
 *
 * @name   npmPkgsCount
 * @param  {String}   `<username>` non emptry string, npm username
 * @param  {Function} `<callback>` node-style callback `(err, res)`
 * @api public
 */
module.exports = function npmPkgsCount(username, callback) {
  is.string(username);
  if (username.length === 0) {
    throw new Error('[npm-pkgs-count] expect `username` to be non empty string');
  }
  is.function(callback);

  return got.get(url + username, function _cb(err, res) {
    if (!is.kindof.null(err)) {
      callback(err);
      return;
    }

    var $ = cheerio.load(res);
    var count = $(selector).text().split(/\s+/)[1];
    callback(null, Number(count));
  });
};
