/**
 * npm-pkgs-count <https://github.com/tunnckoCore/npm-pkgs-count>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var npmPkgsCount = require('./index');

test('npm-pkgs-count:', function() {
  test('should throw TypeError when `username` is not a string', function(done) {
    function fixture() {
      npmPkgsCount({one: 'two'});
    }

    try {
      fixture();
    } catch(e) {
      test.is.number(e.line);
      test.equal(e.actual, 'object');
      test.equal(e.expected, 'string');
      test.equal(e.problem, 'actual !== expected');
      test.equal(/to be string, but object given/.test(e.message), true);
      test.throws(fixture, /to be string, but object given/);
      test.throws(fixture, TypeError);
      done();
    }
  });
  test('should throw Error when `username` is an empty string or array', function(done) {
    function fixture() {
      npmPkgsCount('');
    }
    test.throws(fixture, /expect `username` to be non empty string/);
    test.throws(fixture, Error);
    done();
  });
  test('should throw TypeError when `callback` is not a function', function(done) {
    function fixture() {
      npmPkgsCount('tunnckocore', [1, 2, 3]);
    }

    try {
      fixture();
    } catch(e) {
      test.is.number(e.line);
      test.equal(e.actual, 'array');
      test.equal(e.expected, 'function');
      test.equal(e.problem, 'actual !== expected');
      test.equal(/to be function, but array given/.test(e.message), true);
      test.throws(fixture, /to be function, but array given/);
      test.throws(fixture, TypeError);
      done();
    }
  });
  test('should work properly when existing user given and callback', function(done) {
    npmPkgsCount('tunnckocore', function _cb(err, cnt) {
      test.ifError(err);
      test.is.number(cnt);
      test.equal(cnt > 90, true);
      done();
    });
  });
  test('should error when non existing user given', function(done) {
    npmPkgsCount('fjk43hkjhhhhhhhhhhhhhhhkjgg3k4g234', function _cb(err, cnt) {
      test.is.number(err.code);
      test.is.undefined(cnt);
      test.equal(err instanceof Error, true);
      test.equal(err.code, 404);
      done();
    });
  });
});
