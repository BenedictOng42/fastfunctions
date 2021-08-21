/**
 * Finds the closest position from the starting index in a list
 * where the value is a number. If both the left and right distances
 * are the same, the value on the right is preferred. If no value was
 * found, `null` is returned.
 *
 * TEST CASES:
 *   closestNumberIndex([null, 1, null, null, 100, null, 2, 3, 4], 4) = 6 (value = 2)
 *   closestNumberIndex([null, 1, null, 2, 100, null, 3, 4, 5], 4) = 3 (value = 2)
 *   closestNumberIndex([1, 2, null, 3, 100, 4, 5, 6, 7], 4) = 5 (value = 4)
 *   closestNumberIndex([null, null, null, null, 100], 4) = null
 *   closestNumberIndex([100, null, null, null, null], 0) = null
 *
 * @param list The list of items to look through.
 * @param index The starting position.
 * @returns The index of the closest number if one was found. `null` otherwise.
 */
export function closestNumberIndex(list: number[], index: number, limit?: number) {
  if (index < 0 || index >= list.length) return null;
  let distance = 1;
  while (index - distance > 0 || index + distance < list.length || (limit && distance <= limit)) {
    if (typeof list[index + distance] === "number") return index + distance;
    if (typeof list[index - distance] === "number") return index - distance;
    distance++;
  }
  return null;
}
