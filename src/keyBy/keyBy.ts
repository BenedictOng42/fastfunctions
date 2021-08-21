const keyBy = <T extends { [key: string]: any }>(objects: T[], field: keyof T) => {
  return objects.reduce<{ [key: string]: T }>((keyedObjects, object) => {
    if (object[field]) keyedObjects[object[field]] = object;
    return keyedObjects;
  }, {} as { [key: string]: T });
};

export default keyBy;
