import { AppRouter } from './routes/AppRouter.jsx';
import { CommonToaster } from './components/commonToast/toasterConfig.jsx';

function App() {
  return (
    <>
      <AppRouter />
      <CommonToaster />
    </>
  );
}

export default App;
