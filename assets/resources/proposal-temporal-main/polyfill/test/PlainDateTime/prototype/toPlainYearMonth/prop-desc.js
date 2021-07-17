// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.toplainyearmonth
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.toPlainYearMonth,
  "function",
  "`typeof PlainDateTime.prototype.toPlainYearMonth` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "toPlainYearMonth", {
  writable: true,
  enumerable: false,
  configurable: true,
});
