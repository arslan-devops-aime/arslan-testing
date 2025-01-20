import { sort } from 'fast-sort';
import { doSortingParameters } from 'src/components/table/type';

export const doSorting: doSortingParameters = (data, propertyName, type) => {
  let sortedArray = data || [];
  // sort ASCE
  if (type === 'ASCE') {
    sortedArray = sort(data).asc(obj => obj[propertyName]);
  }

  // sort DESC
  else if (type === 'DESC') {
    sortedArray = sort(data).desc(obj => obj[propertyName]);
  }

  return sortedArray;
};