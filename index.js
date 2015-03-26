/**
 * npm-pkgs-count <https://github.com/tunnckoCore/npm-pkgs-count>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var got = require('got');
var cheerio = require('cheerio');

module.exports = function npmPkgs(username, callback) {
  if (!username) {
    throw new Error('[npm-pkgs] expect at least 2 arguments');
  }
  if (typeof username !== 'string' && !username.length) {
    throw new TypeError('[npm-pkgs] expect `username` be non-empty string');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('[npm-pkgs] expect 2nd argument be function');
  }

  return got.get('https://www.npmjs.com/~' + username, function _cb(err, res) {
    if (err) {
      callback(err);
      return;
    }

    var $ = cheerio.load(res);
    var count = $('#packages').text().split(/\s+/)[1];
    callback(null, Number(count));
  });
};
