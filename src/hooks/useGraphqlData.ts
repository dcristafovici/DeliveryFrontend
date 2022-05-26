import { standardTableDataInterface } from '../Interfaces/GraphqlInterface';

export const getDataFromGraphqlRequest = (data: any): standardTableDataInterface => {
  const queryProperty = Object.keys(data)[0];
  const results: standardTableDataInterface = data[queryProperty];
  const { list, page, pageSize, count } = results;
  return { list, page, pageSize, count };
};
