// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthcode
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Calendar.prototype.monthCode,
  "function",
  "`typeof Calendar.prototype.monthCode` is `function`"
);

verifyProperty(Temporal.Calendar.prototype, "monthCode", {
  writable: true,
  enumerable: false,
  configurable: true,
});
