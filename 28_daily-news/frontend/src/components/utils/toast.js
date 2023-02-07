import { toast } from 'react-toastify';

export const showToast = (type, msg) => {
  if (type === 'SUCCESS') {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  if (type === 'ERROR') {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
