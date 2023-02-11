import { toast } from 'react-toastify';

export const showSuccessMessage = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.BOTTOM_LEFT,
  });
  return;
};

export const showErrorMessage = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.BOTTOM_LEFT,
  });
};
