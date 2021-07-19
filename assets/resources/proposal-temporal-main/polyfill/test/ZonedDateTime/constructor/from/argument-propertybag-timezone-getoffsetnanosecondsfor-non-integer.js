// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: RangeError thrown if time zone reports an offset that is not an integer number of nanoseconds
features: [Temporal]
includes: [temporalHelpers.js]
---*/

[3600_000_000_000.5, NaN].forEach((wrongOffset) => {
  const timeZone = TemporalHelpers.specificOffsetTimeZone(wrongOffset);

  assert.throws(RangeError, () => Temporal.ZonedDateTime.from({ year: 2000, month: 5, day: 2, hour: 12, timeZone }));
});
