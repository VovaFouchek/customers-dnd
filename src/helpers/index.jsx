export const filterData = (query, data) => {
  if (!query) {
    return data;
  }

  return data?.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
};
