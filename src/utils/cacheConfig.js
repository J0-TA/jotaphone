export const cacheTimeout = 3600000;

export const setCache = (key, data) => {
  const expiry = new Date().getTime() + cacheTimeout;
  localStorage.setItem(key, JSON.stringify({ data, expiry }));
};

export const getCache = (key) => {
  const cachedData = JSON.parse(localStorage.getItem(key));
  if (!cachedData) {
    return null;
  }

  const now = new Date().getTime();

  if (now >= cachedData.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return cachedData.data;
};
