import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const checkValidation = (amount: string) => {
  if (/^\d+$/.test(amount) && Number(amount) >= 0) {
    if (Number(amount) < 3000000) {
      toast.error('Minimum bid must be 3 million.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return false;
    } else {
      return true;
    }
  } else {
    toast.error('Please enter a valid positive integer.', {
      position: 'bottom-right',
      autoClose: 3000,
    });
    return false;
  }
};
