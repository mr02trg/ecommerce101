import { firestore } from 'firebase/utils';

export const addUser = user => {
  try {
    const userRef = firestore.collection('users').doc(user.uid);
    userRef.set({
      displayName: user.displayName,
      email: user.email,
      created: new Date(),
      role: user.role
    });
  }
  catch(error) {
    console.error(error);
  }
}

export const getUser = uid => {
  const userRef = firestore.collection('users').doc(uid);
  return userRef.get();
}

// persist user to local storage
const USER_LOCAL_STORAGE_KEY = 'user-data';

export const saveUserToStorage = userData => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userData));
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY));
}

export const clearUserFromStorage = () => {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}