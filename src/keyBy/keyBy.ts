export function keyBy<T extends { [key: string]: any }>(
  objects: T[],
  field: keyof T
): { [key: string]: T } {
  return objects.reduce((keyedObjects, object) => {
    if (object[field]) keyedObjects[object[field]] = object;
    return keyedObjects;
  }, {} as { [key: string]: T });
}
