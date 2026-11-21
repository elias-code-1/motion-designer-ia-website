export function getNextIndex(current: number, length: number): number {
  if (length <= 0) return 0;
  return (current + 1) % length;
}

export function getPrevIndex(current: number, length: number): number {
  if (length <= 0) return 0;
  return (current - 1 + length) % length;
}

export function clampIndex(index: number, length: number): number {
  if (length <= 0) return 0;
  if (index < 0) return 0;
  if (index >= length) return length - 1;
  return index;
}
