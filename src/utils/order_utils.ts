export const combineOrders = (orders: []): [] => {
  const formatedOrders = orders.map((order:any) => ({
    ...order,
    created_at: new Date(order.created_at).toLocaleDateString('en-US'),
  }));
  return formatedOrders.reduce((hash:any, obj: any) => {
    if (obj.created_at === undefined) return hash;
    return Object
      .assign(hash, { [obj.created_at]: (hash[obj.created_at] || []).concat(obj) });
  }, {});
};
