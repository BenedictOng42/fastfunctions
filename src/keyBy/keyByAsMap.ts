const keyByAsMap = <T>(objects: T[], field: keyof T) => {
  return objects.reduce((keyedObjects, object) => {
    if (!object[field]) return keyedObjects;
    return keyedObjects.set(object[field], object);
  }, new Map<T[keyof T], T>());
};

export default keyByAsMap;
