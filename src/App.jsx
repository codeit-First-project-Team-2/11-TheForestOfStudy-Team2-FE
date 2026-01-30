import { CommonToaster } from './components/toasterConfig.jsx';
import { showToast } from './utils/toast.util.js';
// import { AppRouter } from './routes/AppRouter.jsx';
function App() {
  return (
    <>
      <h1>토스트 테스트</h1>
      <button onClick={() => showToast.success('테스트 성공메세지입니다.')}>
        성공
      </button>
      <button onClick={() => showToast.error('테스트 에러메세지입니다.')}>
        에러
      </button>
      {/* <AppRouter /> */}
      <CommonToaster />
    </>
  );
}

export default App;
