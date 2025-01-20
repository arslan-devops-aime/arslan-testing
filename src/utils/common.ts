export const isObject = (val: any): boolean => {
  return (
    val !== null &&
    typeof val === 'object' &&
    val instanceof Object &&
    val.constructor === Object
  );
};
