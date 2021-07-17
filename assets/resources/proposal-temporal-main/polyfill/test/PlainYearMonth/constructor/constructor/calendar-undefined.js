// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth
features: [Temporal]
---*/

const args = [2000, 5];

Object.defineProperty(Temporal.Calendar, "from", {
  get() {
    throw new Test262Error("Should not get Calendar.from");
  },
});

const dateExplicit = new Temporal.PlainYearMonth(...args, undefined);
assert.sameValue(dateExplicit.calendar.toString(), "iso8601");

const dateImplicit = new Temporal.PlainYearMonth(...args);
assert.sameValue(dateImplicit.calendar.toString(), "iso8601");
