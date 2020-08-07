import { auth, firestore } from './utils';

export const addUser = user => {
  const userRef = firestore.collection('users').doc(user.uid);
  userRef.get().then(doc => {
    if (! doc.exists) {
      userRef.set({
        displayName: user.displayName,
        email: user.email,
        created: new Date()
      });
    }
  }, error => {
    throw error;
  })
}

export const getUser = uid => {
  const userRef = firestore.collection('users').doc(uid);
  return userRef.get();
}