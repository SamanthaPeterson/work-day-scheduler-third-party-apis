// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.getisofields
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.getISOFields,
  "function",
  "`typeof PlainTime.prototype.getISOFields` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "getISOFields", {
  writable: true,
  enumerable: false,
  configurable: true,
});
