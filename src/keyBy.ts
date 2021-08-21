export const keyBy = <T extends { [key: string]: any }>(
  objects: T[],
  field: keyof T
) => {
  return objects.reduce<{ [key: string]: T }>((keyedObjects, object) => {
    if (object[field]) keyedObjects[object[field]] = object;
    return keyedObjects;
  }, {} as { [key: string]: T });
};

export const keyByAsObject = <T>(objects: T[], field: keyof T) => {
  return objects.reduce((keyedObjects, object) => {
    if (!object[field]) return keyedObjects;
    return keyedObjects.set(object[field], object);
  }, new Map<T[keyof T], T>());
};
