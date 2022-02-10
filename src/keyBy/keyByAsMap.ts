export function keyByAsMap<T>(objects: T[], field: keyof T): Map<T[keyof T], T> {
  return objects.reduce((keyedObjects, object) => {
    if (!object[field]) return keyedObjects;
    return keyedObjects.set(object[field], object);
  }, new Map<T[keyof T], T>());
}

export function keyByPathAsMap<T extends { [key: string]: any }>(
  objects: T[],
  getKey: (object: T) => string | number | null | undefined
): Map<string, T> {
  return objects.reduce((keyedObjects, object) => {
    const key = getKey(object);
    if (key) keyedObjects.set(String(key), object);
    return keyedObjects;
  }, new Map<string, T>());
}
