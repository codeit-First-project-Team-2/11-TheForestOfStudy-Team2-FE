import { Toaster } from 'react-hot-toast';
import './toasterConfig.css';

export const CommonToaster = () => {
  return (
    <Toaster
      position="bottom-center"
      containerStyle={{ bottom: 40 }}
      toastOptions={{ className: 'commonToast', duration: 3000 }}
    />
  );
};
