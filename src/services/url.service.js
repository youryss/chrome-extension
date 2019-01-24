export const parseToUrl = (params) => {
  const result = params.reduce((prev, cur) => {
    prev.push(`${cur.key}=${cur.value}`);
    return prev;
  }, []).join('&');

  return result;
}

export const replaceParamsFromString = (url, params) => {
  return url.replace(/[^&?]*?=[^#?]*/g, params);
}
