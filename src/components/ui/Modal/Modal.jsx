import { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.css';

const VALID_SIZES = ['sm', 'md', 'lg'];

export const Modal = ({ title, children, isOpen, onClose, size = 'md' }) => {
  const safeSize = VALID_SIZES.includes(size) ? size : 'md';

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    onClose?.();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={clsx(styles.modal, styles[safeSize])}
        onClick={handleModalClick}
        role="dialog"
        aria-modal="true"
        aria-label={title || 'modal'}
      >
        <div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => onClose?.()}
            aria-label="닫기"
          />
        </div>

        {title ? (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        ) : null}

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
