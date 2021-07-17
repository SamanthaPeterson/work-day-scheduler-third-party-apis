// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.withPlainDate,
  "function",
  "`typeof PlainDateTime.prototype.withPlainDate` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "withPlainDate", {
  writable: true,
  enumerable: false,
  configurable: true,
});
