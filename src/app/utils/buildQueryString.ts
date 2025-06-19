interface BuildQueryParams {
  limit?: string;
  page?: string;
  sort?: string;
  order?: string;
}

const buildQueryString = ({ limit = "12", page = "1", sort, order }: BuildQueryParams): string => {
  const parts = [`_limit=${limit}`, `_page=${page}`];

  if (sort) parts.push(`_sort=${sort}`);
  if (order) parts.push(`_order=${order}`);

  return `?${parts.join("&")}`;
};

export default buildQueryString;