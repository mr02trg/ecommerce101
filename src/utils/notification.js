import { store } from 'react-notifications-component';

export const notify = (type, message = '') => {
  store.addNotification({
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 4000,
      onScreen: true
    }
  });
}