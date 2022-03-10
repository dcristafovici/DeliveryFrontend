export const getKeyName = (object: any, value: string): any => Object
  .entries(object)
  .find(([key, val]) => val === value)
  ?.[0];
