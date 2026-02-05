import React, { useState } from 'react';
import { Modal } from '../ui/Modal/Modal.jsx';
import { TextField } from '../ui/TextField/TextField.jsx';
import { Button } from '../ui/Button/Button.jsx';
import Visible from '../../assets/studyDetail/Visible.jpg';
import NoVisible from '../../assets/studyDetail/Novisible.jpg';
import styles from './PasswordModal.module.css';

export const PasswordModal = ({ isOpen, onClose, title, onConfirm, isDelete = false }) => {
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleConfirm = () => {
    onConfirm(password);
    setPassword(''); 
  };

  const handleClose = () => {
    setPassword('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={title} size="sm">
      {isDelete && (
        <div className={styles.alertContainer}>
          <div>⚠️스터디를 삭제하면 복구할 수 없습니다.</div>
        </div>
      )}
      <div className={styles.modalContainer}>
        <p className={styles.modalLabelWrapper}>권한이 필요해요!</p>
        <div className={styles.modalTextContainer}>
          <TextField
            type={isShowPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            fullWidth
          />
          <button
            type="button"
            onClick={() => setIsShowPassword(!isShowPassword)}
            className={styles.visibleButton}
          >
            <img src={isShowPassword ? Visible : NoVisible} alt="toggle" />
          </button>
        </div>
        <Button onClick={handleConfirm}>확인</Button>
      </div>
    </Modal>
  );
};