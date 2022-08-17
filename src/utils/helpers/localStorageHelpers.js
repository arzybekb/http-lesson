export const getStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const addItemToStorage = (item, key) => {
  localStorage.setItem(key, JSON.stringify(item));
};
export const removeItemFromStorage = (key) => {
  localStorage.removeItem(key);
};
