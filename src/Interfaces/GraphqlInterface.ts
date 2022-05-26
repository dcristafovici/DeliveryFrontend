export interface EdgeInterface<T> {
  node: T;
}

export interface PageInfoInterface {
  startCursor: string;
  endCursor: string;
}

export interface GraphqlGetInterface<T> {
  edges: EdgeInterface<T>[];
  pageInfo: PageInfoInterface;
}

export interface standardTableDataInterface {
  list: [],
  page: number;
  pageSize: number,
  count: number;
}
