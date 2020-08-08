import { store } from 'react-notifications-component';

export const NOTIFICATION_TYPE = {
  SUCCESS: 'success',
  DANGER: 'danger',
  INFO: 'info',
  WARNING: 'warning'
}

export const notify = (type, message = '') => {
  store.addNotification({
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
}