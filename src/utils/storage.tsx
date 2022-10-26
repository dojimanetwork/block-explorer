//Session storage utils

export const setToSs = (key: string, value: any) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSs = (key: string): any | undefined => {
  const value = window.sessionStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};

export const removeFromSs = (key: string): void => {
  window.sessionStorage.removeItem(key);
};

export const clearSs = () => window.sessionStorage.clear();

//store, remove, get user value from ls
export const storeToLs = (key: string, data: any) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLs = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};

export const clearLs = () => {
  window.localStorage.clear();
};

//store, remove, get previously click private menu bar item
export const getPrevPrivateMenuIndex = (): number | undefined => {
  const index = getFromSs('prevPrivateMenuIndex');
  return index ? index : undefined;
};

export const storePrevPrivateMenuIndex = (index: number) => {
  setToSs('prevPrivateMenuIndex', index);
};

export const removePrevPrivateMenuIndex = () => {
  removeFromSs('prevPrivateMenuIndex');
};
