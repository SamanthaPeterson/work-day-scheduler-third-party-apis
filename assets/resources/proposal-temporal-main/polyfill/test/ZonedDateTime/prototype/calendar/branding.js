// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.zoneddatetime.prototype.calendar
features: [Symbol, Temporal]
---*/

const calendar = Object.getOwnPropertyDescriptor(Temporal.ZonedDateTime.prototype, "calendar").get;

assert.sameValue(typeof calendar, "function");

assert.throws(TypeError, () => calendar.call(undefined), "undefined");
assert.throws(TypeError, () => calendar.call(null), "null");
assert.throws(TypeError, () => calendar.call(true), "true");
assert.throws(TypeError, () => calendar.call(""), "empty string");
assert.throws(TypeError, () => calendar.call(Symbol()), "symbol");
assert.throws(TypeError, () => calendar.call(1), "1");
assert.throws(TypeError, () => calendar.call({}), "plain object");
assert.throws(TypeError, () => calendar.call(Temporal.ZonedDateTime), "Temporal.ZonedDateTime");
assert.throws(TypeError, () => calendar.call(Temporal.ZonedDateTime.prototype), "Temporal.ZonedDateTime.prototype");
