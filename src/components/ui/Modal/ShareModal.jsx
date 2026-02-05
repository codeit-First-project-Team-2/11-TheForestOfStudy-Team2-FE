import { showToast } from '@/utils/toast.util';
import styles from './ShareModal.module.css';

export const ShareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast.success('링크를 복사했습니다.');
    } catch (error) {
      console.error('링크 복사 오류', error);
      showToast.error('링크 복사에 실패했습니다.');
    }
  };

  return (
    <div className={styles.shareLayout}>
      <div className={styles.shareContainer}>
        <div className={styles.closeModal} onClick={onClose}>
          X
        </div>
        <p className={styles.shareText}>공유하기</p>
        <input
          className={styles.shareInput}
          type="text"
          value={window.location.href}
          readOnly
        />
        <div className={styles.buttonWrapper}>
          <button className={styles.buttons} onClick={handleCopyLink}>
            복사
          </button>
          <button
            className={`${styles.buttons} ${styles.close}`}
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
