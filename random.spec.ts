#!/usr/bin/env tsx

import { assert } from './assert.js';
import { randomize, splitmix32 } from './random.js';

const seed = 0;
const rand = randomize(splitmix32(seed));

const array = [1,2,3,4,5,6,7,8,9,0];

assert(rand.pickOne(array) === 4);
assert(JSON.stringify(rand.pickSome(array, 2, 4)) === '[7,5]');

assert(rand.randomInt(6) === 4);
assert(rand.randomIntBetween(12, 16) === 15);
