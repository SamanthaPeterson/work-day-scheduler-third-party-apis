// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.toplainyearmonth
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.ZonedDateTime.prototype.toPlainYearMonth();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.ZonedDateTime.prototype.toPlainYearMonth), false,
  "isConstructor(Temporal.ZonedDateTime.prototype.toPlainYearMonth)");
