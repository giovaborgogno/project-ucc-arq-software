import { toast } from 'react-toastify';

export function alert(type, message) {
  switch (type) {
    case 'success':
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    case 'error':
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    case 'warn':
      toast.warn(message, { position: toast.POSITION.TOP_RIGHT });
      break;
      case 'info':
        toast.info(message, { position: toast.POSITION.TOP_RIGHT });
        break;
    default:
      toast(message, { position: toast.POSITION.TOP_RIGHT });
      break;
  }
}