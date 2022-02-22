export const differenceBetweenObjects = (obj1: any, obj2: any) => Object.keys(obj1)
  .reduce((acc, curr) => {
    if (obj1[curr] !== obj2[curr]) {
      return { ...acc, [curr]: obj2[curr] };
    }
    return acc;
  }, {});
