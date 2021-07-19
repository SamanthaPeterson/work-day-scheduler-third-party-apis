// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.tostring
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.toString,
  "function",
  "`typeof PlainTime.prototype.toString` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
