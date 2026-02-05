import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { useState } from 'react';

import useStudyForm from '@/hooks/study/useStudyForm.hook.js';
import BackgroundSelector from './BackgroundSelector.jsx';

import styles from './StudyForm.module.css';

const StudyForm = ({ mode, studyId }) => {
  const isEdit = mode === 'edit';

  const { form, errors, isLoading, handleChange, handleSubmit, setForm } =
    useStudyForm({ mode, studyId });

  const [showPassword] = useState(false);
  const [showPasswordConfirm] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className={styles.inputBox}>
        <p className={styles.labelText}>닉네임</p>
        <TextField
          className={styles.input}
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          value={form.nickname}
          onChange={handleChange('nickname')}
          hasError={!!errors.nickname}
          // helperText={errors.nickname}
        />
      </div>

      <div className={styles.inputBox}>
        <p className={styles.labelText}>스터디 이름</p>
        <TextField
          className={styles.input}
          label="스터디 이름"
          placeholder="스터디 이름을 입력해 주세요"
          value={form.title}
          onChange={handleChange('title')}
          hasError={!!errors.title}
          // helperText={errors.title}
        />
      </div>

      <div className={styles.inputBox}>
        <p className={styles.labelText}>소개</p>
        <textarea
          className={`${styles.input} ${styles.introTextarea}`}
          placeholder="소개 멘트를 작성해 주세요"
          value={form.introduction}
          onChange={handleChange('introduction')}
        />
      </div>

      <BackgroundSelector
        value={form.background}
        onChange={(background) =>
          setForm((prev) => ({
            ...prev,
            background,
          }))
        }
      />
      {errors.background && <p className={styles.error}>{errors.background}</p>}

      <div className={styles.inputBox}>
        <p className={styles.labelText}>비밀번호</p>
        <TextField
          className={styles.input}
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange('password')}
          hasError={!!errors.password}
          autoComplete="new-password"
          // helperText={errors.password}
          // rightIcon={showPassword ? 'eye-off' : 'eye'}
          // onRightIconClick={() => setShowPassword((prev) => !prev)}
        />
      </div>

      <div className={styles.inputBox}>
        <p className={styles.labelText}>비밀번호 확인</p>
        <TextField
          className={styles.input}
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해 주세요"
          type={showPasswordConfirm ? 'text' : 'password'}
          value={form.passwordConfirm}
          onChange={handleChange('passwordConfirm')}
          hasError={!!errors.passwordConfirm}
          autoComplete="new-password"
          // helperText={errors.passwordConfirm}
          // rightIcon={showPasswordConfirm ? 'eye-off' : 'eye'}
          // onRightIconClick={() => setShowPasswordConfirm((prev) => !prev)}
        />
      </div>

      <Button type="submit" size="lg" fullWidth disabled={isLoading}>
        {isEdit ? '수정하러 가기' : '만들기'}
      </Button>
      {/* </div> */}
    </form>
  );
};

export default StudyForm;
