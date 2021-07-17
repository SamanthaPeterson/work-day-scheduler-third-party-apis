// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.tojson
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toJSON,
  "function",
  "`typeof PlainDate.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
