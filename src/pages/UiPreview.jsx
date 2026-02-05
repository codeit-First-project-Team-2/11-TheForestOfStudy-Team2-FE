import { useState } from 'react';
import { Header } from '@/components/ui/Header/Header';
import { PageHeader } from '@/components/ui/PageHeader/PageHeader';
import { PageCard } from '@/components/ui/PageCard/PageCard';
import { Button } from '@/components/ui/Button/Button';
import { Modal } from '@/components/ui/Modal/Modal';
import { TextField } from '@/components/ui/TextField';

export const UiPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
      <Header />
      <div className="pageBackground">
        <div className="pageLayout">
          <div className="pageContent">
            <PageHeader
              title="연우의 개발공장"
              currentTime="오후 3:06"
              totalPoint={310}
              onFocusClick={() => {
                console.log('focus');
              }}
              onHomeClick={() => {
                console.log('home');
              }}
            />

            <PageCard />

            {/* Modal open Button  */}
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              모달 열기를 하면 어떻게 되나요!
            </Button>

            <Button fullWidth>카드 가득 버튼</Button>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="텍스트 입력"
              fullWidth
              ariaLabel="ui preview text field"
            />
            {/* Modal */}
            <Modal
              isOpen={isOpen}
              title="짜잔 Modal"
              size="md"
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <p>내용 들어갑니다.</p>
              <p>내용 들어갑니다.</p>
              <p>내용 들어갑니다.</p>
              <p>내용 들어갑니다.</p>

              {/* button 영역 */}
              <div
                style={{ display: 'flex', gap: 13, justifyContent: 'center' }}
              >
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  취소
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  확인
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
