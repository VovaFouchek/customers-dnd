export const filterData = (data, query = '') => {
  if (!query) {
    return data;
  }

  return data?.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};
