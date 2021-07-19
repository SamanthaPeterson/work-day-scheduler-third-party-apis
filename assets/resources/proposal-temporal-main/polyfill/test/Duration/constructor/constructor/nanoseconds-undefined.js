// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration
features: [Temporal]
---*/

const args = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const explicit = new Temporal.Duration(...args, undefined);
assert.sameValue(explicit.nanoseconds, 0, "nanoseconds default argument");

const implicit = new Temporal.Duration(...args);
assert.sameValue(implicit.nanoseconds, 0, "nanoseconds default argument");
