import test from 'node:test';
import assert from 'node:assert/strict';
import { clampIndex, getNextIndex, getPrevIndex } from './carousel';

test('getNextIndex wraps cleanly from last item back to zero', () => {
  assert.equal(getNextIndex(0, 3), 1);
  assert.equal(getNextIndex(1, 3), 2);
  assert.equal(getNextIndex(2, 3), 0);
});

test('getPrevIndex wraps cleanly from zero to last item', () => {
  assert.equal(getPrevIndex(0, 3), 2);
  assert.equal(getPrevIndex(2, 3), 1);
  assert.equal(getPrevIndex(1, 3), 0);
});

test('handles empty or single-item collections safely', () => {
  assert.equal(getNextIndex(0, 0), 0);
  assert.equal(getPrevIndex(0, 0), 0);
  assert.equal(getNextIndex(0, 1), 0);
  assert.equal(getPrevIndex(0, 1), 0);
  assert.equal(clampIndex(-2, 3), 0);
  assert.equal(clampIndex(5, 3), 2);
  assert.equal(clampIndex(1, 3), 1);
});
