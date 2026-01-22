import { Button } from './components/Button/Button';
import { Empty } from './components/Empty/Empty';

function App() {
  
  return (
    <>
      <h1>공부의 숲 웹사이트입니다.</h1>
      <p>만드는 사람들: 2팀 화이팅!</p>

      {/* 공용 Button 테스트*/ }
      <Button>스터디 만들기</Button>
      <Button variant='secondary'>취소</Button>

      {/* Empty 컴포넌트 테스트*/ }
      <Empty message="오늘의 습관이 아직 없어요" />
    </>
  )
}

export default App;
