import React, { useState } from 'react';
import styles from './EmojiAddition.module.css';
import EmojiPicker from 'emoji-picker-react';
import smileIcon from '../../assets/smile.jpg';
export const EmojiAddition = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const handleOpenEmoji = () => setEmojiOpen(!emojiOpen);
  //todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경

  const selectedEmojis = [
    { id: 1, emoji: '👩‍💻', count: 37 },
    { id: 2, emoji: '👍', count: 11 },
    { id: 3, emoji: '🤩', count: 9 },
  ];
  return (
    <div className={styles.emojiContainer}>
      {selectedEmojis.map((item) => (
        <button key={item.id} className={styles.emojiReactionBadge}>
          <span>{item.emoji}</span>
          <span className={styles.emojiCount}>{item.count}</span>
        </button>
      ))}
      <div></div>
      <button className={styles.emojiWrapper} onClick={handleOpenEmoji}>
        <img src={smileIcon} />
        추가
      </button>
      {emojiOpen && (
        <div className={styles.pickerWrapper}>
          <EmojiPicker onEmojiClick={(emojiData) => console.log(emojiData)} />
        </div>
      )}
    </div>
  );
};
