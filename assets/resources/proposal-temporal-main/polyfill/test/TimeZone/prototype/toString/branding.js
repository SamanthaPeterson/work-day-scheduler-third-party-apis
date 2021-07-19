// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.tostring
features: [Symbol, Temporal]
---*/

const toString = Temporal.TimeZone.prototype.toString;

assert.sameValue(typeof toString, "function");

assert.throws(TypeError, () => toString.call(undefined), "undefined");
assert.throws(TypeError, () => toString.call(null), "null");
assert.throws(TypeError, () => toString.call(true), "true");
assert.throws(TypeError, () => toString.call(""), "empty string");
assert.throws(TypeError, () => toString.call(Symbol()), "symbol");
assert.throws(TypeError, () => toString.call(1), "1");
assert.throws(TypeError, () => toString.call({}), "plain object");
assert.throws(TypeError, () => toString.call(Temporal.TimeZone), "Temporal.TimeZone");
assert.throws(TypeError, () => toString.call(Temporal.TimeZone.prototype), "Temporal.TimeZone.prototype");
