export function keyBy<T extends { [key: string]: any }>(
  objects: T[],
  field: keyof T
): { [key: string]: T } {
  return objects.reduce((keyedObjects, object) => {
    if (object[field]) keyedObjects[object[field]] = object;
    return keyedObjects;
  }, {} as { [key: string]: T });
}

export function keyByPath<T extends { [key: string]: any }>(
  objects: T[],
  getKey: (object: T) => string | number | null | undefined
): { [key: string]: T } {
  return objects.reduce((keyedObjects, object) => {
    const key = getKey(object);
    if (key) keyedObjects[key] = object;
    return keyedObjects;
  }, {} as { [key: string]: T });
}
