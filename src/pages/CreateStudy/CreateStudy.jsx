import { useParams, useLocation } from 'react-router-dom';

import { PageTitle } from '@/components/ui/PageTitle';
import { PageCard } from '@/components/ui/PageCard';

import StudyForm from '@/components/study/StudyForm';

import styles from './CreateStudy.module.css';

const CreateStudy = () => {
  const { studyId } = useParams();
  const location = useLocation();

  // URL 기준으로 mode 판단
  // /study/new        → create
  // /study/:id/edit   → edit
  const isEdit = location.pathname.includes('edit');

  return (
    <div className={styles.wrapper}>
      <PageTitle children={isEdit ? '스터디 수정하기' : '스터디 만들기'} />

      {/* <PageCard> */}
        {isEdit ? (
          <StudyForm mode="edit" studyId={studyId} />
        ) : (
          <StudyForm mode="create" />
        )}
      {/* </PageCard> */}
    </div>
  );
};

export default CreateStudy;
