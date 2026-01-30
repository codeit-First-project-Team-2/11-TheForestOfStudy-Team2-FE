import React, { useState } from 'react';
import styles from './EmojiAddition.module.css';
import EmojiPicker from 'emoji-picker-react';

export const EmojiAddition = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const handleOpenEmoji = () => setEmojiOpen(!emojiOpen);
  //todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경

  return (
    <div>
      <div className={styles.emojiContainer}>
        <div>이모지버튼들 자리</div>
        <button className={styles.emojiWrapper} onClick={handleOpenEmoji}>
          이모지추가
        </button>
        <EmojiPicker open={emojiOpen} />
      </div>
    </div>
  );
};
