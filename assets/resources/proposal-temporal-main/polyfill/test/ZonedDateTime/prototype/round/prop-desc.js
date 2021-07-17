// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.round
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.round,
  "function",
  "`typeof ZonedDateTime.prototype.round` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "round", {
  writable: true,
  enumerable: false,
  configurable: true,
});
