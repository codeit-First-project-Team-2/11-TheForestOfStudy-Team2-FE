import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; // URL에서 studyId 가져오기
import styles from './EmojiAddition.module.css';
import EmojiPicker from 'emoji-picker-react';
import smileIcon from '../../assets/studyDetail/smile.jpg';
import { getEmojiStats, createEmoji } from '../../apis/studyService';
import useStudyStore from '../../stores/useStudyStore';
import { showToast } from '../../utils/toast.util';
import { EMOJI_LIMITS } from '../../constants/validation';
import { TOAST } from '../../constants/error';

export const EmojiAddition = () => {
  const { studyId } = useParams(); // props 대신 여기서 직접 추출!
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [emojiButtonOpen, setEmojiButtonOpen] = useState(false);

  const studyData = useStudyStore((state) => state.studyData);
  const setEmojiStats = useStudyStore((state) => state.setEmojiStats);

  useEffect(() => {
    const getStats = async () => {
      try {
        if (!studyId) return;
        const stats = await getEmojiStats(studyId);
        setEmojiStats(stats);
      } catch (error) {
        console.error(error);
      }
    };
    getStats();
  }, [studyId, setEmojiStats]);

  const handleEmojiAction = async (emojiChar) => {
    try {
      const updatedStats = await createEmoji(studyId, emojiChar);
      setEmojiStats(updatedStats);
      setEmojiPickerOpen(false);
    } catch (error) {
      showToast.error(TOAST.EMOJI_ERROR, error);
    }
  };

  const displayEmojis = studyData?.emojiStats
    ? Object.entries(studyData.emojiStats).map(([emoji, count]) => ({
        emoji,
        count,
      }))
    : [];
  // 1. 처음 3개만 메인에 노출
  const visibleEmojis = displayEmojis.slice(
    0,
    EMOJI_LIMITS.VISIBLE.MAX_VISIBLE_EMOJIS,
  );
  // 2. 나머지 이모지들
  const hiddenEmojis = displayEmojis.slice(
    EMOJI_LIMITS.VISIBLE.MAX_VISIBLE_EMOJIS,
  );
  // 3. 숨겨진 이모지 개수
  const hiddenCount = hiddenEmojis.length;

  return (
    <div className={styles.emojiContainer}>
      {visibleEmojis.map((item) => (
        <button
          onClick={handleEmojiAction}
          key={item.emoji}
          className={styles.emojiReactionBadge}
        >
          <span>{item.emoji}</span>
          <span className={styles.emojiCount}>{item.count}</span>
        </button>
      ))}

      {hiddenCount > 0 && (
        <div className={styles.moreWrapper}>
          <button
            className={styles.moreButton}
            onClick={() => setEmojiButtonOpen(!emojiButtonOpen)}
          >
            + {hiddenCount}
          </button>

          {emojiButtonOpen && (
            <div className={styles.extraPanel}>
              {hiddenEmojis.map((item) => (
                <button
                  onClick={handleEmojiAction}
                  key={item.emoji}
                  className={styles.emojiReactionBadge}
                >
                  <span>{item.emoji}</span>
                  <span className={styles.emojiCount}>{item.count}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <button
        onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
        className={styles.emojiWrapper}
      >
        <img src={smileIcon} alt="smile" />
        추가
      </button>

      {emojiPickerOpen && (
        <div className={styles.pickerWrapper}>
          <EmojiPicker onEmojiClick={(data) => handleEmojiAction(data.emoji)} />
        </div>
      )}
    </div>
  );
};
