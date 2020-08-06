
// persist user to local storage
const USER_LOCAL_STORAGE_KEY = 'user-data'

export const saveUserToStorage = userData => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userData));
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY));
}

export const clearUserFromStorage = () => {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}