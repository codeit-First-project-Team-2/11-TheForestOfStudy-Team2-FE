import { useState } from "react";
import { Button } from "./components/Button/Button";
import { Empty } from "./components/Empty/Empty";
import { Input } from "./components/Input/Input";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>공부의 숲 웹사이트입니다.</h1>
      <p>만드는 사람들: 2팀 화이팅!</p>

      {/* Button 테스트 */}
      <Button>스터디 만들기</Button>
      <Button variant="secondary">취소</Button>

      {/* Empty 테스트 */}
      <Empty message="오늘의 습관이 아직 없어요." />

      {/* Input 테스트 */}
      <Input
        value={text}
        onChange={handleChange}
        placeholder="습관 이름을 입력해보세요."
      />
      <p>{text}</p>
      <Button>확인</Button>

      {/* Modal 테스트 */}
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>

      <Modal
        isOpen={isOpen}
        title="습관추가"
        onClose={() => setIsOpen(false)}>
        <p>여기에 폼이 들어가욧!</p>
        <Button onClick={() => setIsOpen(false)}>닫기</Button>
      </Modal>

    </>
  );
}

export default App;
