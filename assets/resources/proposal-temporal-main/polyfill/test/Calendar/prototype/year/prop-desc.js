// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.year
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Calendar.prototype.year,
  "function",
  "`typeof Calendar.prototype.year` is `function`"
);

verifyProperty(Temporal.Calendar.prototype, "year", {
  writable: true,
  enumerable: false,
  configurable: true,
});
