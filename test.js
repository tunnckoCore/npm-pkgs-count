/**
 * npm-pkgs-count <https://github.com/tunnckoCore/npm-pkgs-count>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('assert-kindof');
var assert = require('assert');
var npmPkgsCount = require('./index');

describe('npm-pkgs-count:', function() {
  it('should throw TypeError when `username` is not a string', function(done) {
    assert.throws(function fixture() {
      npmPkgsCount({one: 'two'});
    }, /to be string, but object given/);

    try {
      npmPkgsCount({one: 'two'});
    } catch(e) {
      is.number(e.line);
      assert.strictEqual(e.actual, 'object');
      assert.strictEqual(e.expected, 'string');
      assert.strictEqual(e.problem, 'actual !== expected');
      assert.strictEqual(/to be string, but object given/.test(e.message), true);

      assert.throws(function fixture() {
        npmPkgsCount({one: 'two'});
      }, TypeError);
      done();
    }
  });


  it('should throw Error when `username` is an empty string or array', function(done) {
    assert.throws(function fixture() {
      npmPkgsCount('');
    }, /expect `username` to be non empty string/);

    assert.throws(function fixture() {
      npmPkgsCount('');
    }, Error);

    done();
  });

  it('should throw TypeError when `callback` is not a function', function(done) {
    assert.throws(function fixture() {
      npmPkgsCount('tunnckocore', [1, 2, 3]);
    }, /to be function, but array given/);

    try {
      npmPkgsCount('tunnckocore', [1, 2, 3]);
    } catch(e) {
      is.number(e.line);
      assert.strictEqual(e.actual, 'array');
      assert.strictEqual(e.expected, 'function');
      assert.strictEqual(e.problem, 'actual !== expected');
      assert.strictEqual(/to be function, but array given/.test(e.message), true);


      assert.throws(function fixture() {
        npmPkgsCount('tunnckocore', [1, 2, 3]);
      }, TypeError);
      done();
    }
  });

  it('should work properly when existing user given and callback', function(done) {
    this.timeout(30000);

    npmPkgsCount('tunnckocore', function _cb(err, cnt) {
      assert.ifError(err);
      is.number(cnt);
      assert.strictEqual(cnt > 90, true);
      done();
    });
  });

  it('should error when non existing user given', function(done) {
    this.timeout(30000);

    npmPkgsCount('fjk43hkjhhhhhhhhhhhhhhhkjgg3k4g234', function _cb(err, cnt) {
      is.number(err.code);
      is.undefined(cnt);
      assert.strictEqual(err instanceof Error, true);
      assert.strictEqual(err.code, 404);
      done();
    });
  });
});
