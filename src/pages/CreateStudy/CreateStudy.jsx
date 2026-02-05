import { useParams, useLocation } from 'react-router';

import { PageTitle } from '@/components/ui/PageTitle';

import StudyForm from '@/components/study/StudyForm';

import styles from './CreateStudy.module.css';

export const CreateStudy = () => {
  const { studyId } = useParams();
  const location = useLocation();

  // URL 기준으로 mode 판단
  // /study/new        → create
  // /study/:id/edit   → edit
  const isEdit = location.pathname.includes('write');

  return (
    <div
      className={`${styles.wrapper} ${
        isEdit ? styles.wrapperEdit : styles.wrapperCreate
      }`}
    >
      <PageTitle children={isEdit ? '스터디 수정하기' : '스터디 만들기'} />

      {isEdit ? (
        <StudyForm mode="edit" studyId={studyId} />
      ) : (
        <StudyForm mode="create" />
      )}
    </div>
  );
};
