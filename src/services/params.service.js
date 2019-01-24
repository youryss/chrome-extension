export const sortByKey = (array, value) =>
  array.sort((a, b) => a.key === value ? -1 : b.key === value ? 1 : 0);

export const parseUrlToJson = (params) => {
  const matchParams = params.match(/[^&?]*?=[^&#?]*/g);
  if (!matchParams) return [];

  const result = matchParams.map((item, index) => {
    let param = item.split('=');
    return { key: param[0], value: param[1], display: true }
  });

  return sortByKey(result, 'version');
};