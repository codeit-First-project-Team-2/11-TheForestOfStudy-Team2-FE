import { TodayFocus } from './pages/TodayFocus.jsx';
import { UiPreview } from '@/pages/UiPreview.jsx';
import { CommonToaster } from './components/toasterConfig.jsx';
// import { AppRouter } from './routes/AppRouter.jsx';


function App() {

  return (
    <>
      {/* <AppRouter /> */}
      <TodayFocus />
      <UiPreview />
      <CommonToaster />
    </>
  );
}

export default App;
