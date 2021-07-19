// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.toplaindatetime
features: [Symbol, Temporal]
---*/

const toPlainDateTime = Temporal.PlainDate.prototype.toPlainDateTime;

assert.sameValue(typeof toPlainDateTime, "function");

assert.throws(TypeError, () => toPlainDateTime.call(undefined), "undefined");
assert.throws(TypeError, () => toPlainDateTime.call(null), "null");
assert.throws(TypeError, () => toPlainDateTime.call(true), "true");
assert.throws(TypeError, () => toPlainDateTime.call(""), "empty string");
assert.throws(TypeError, () => toPlainDateTime.call(Symbol()), "symbol");
assert.throws(TypeError, () => toPlainDateTime.call(1), "1");
assert.throws(TypeError, () => toPlainDateTime.call({}), "plain object");
assert.throws(TypeError, () => toPlainDateTime.call(Temporal.PlainDate), "Temporal.PlainDate");
assert.throws(TypeError, () => toPlainDateTime.call(Temporal.PlainDate.prototype), "Temporal.PlainDate.prototype");
