import { useParams, useLocation } from 'react-router-dom';

import PageHeader from '@/components/ui/PageHeader';
import PageCard from '@/components/ui/PageCard';

import CreateStudyForm from '../components/study/StudyForm';

import styles from './CreateStudy.module.css';

export const CreateStudyPage = () => {
  const { studyId } = useParams();
  const location = useLocation();

  // URL 기준으로 mode 판단
  // /study/new        → create
  // /study/:id/edit   → edit
  const isEdit = location.pathname.includes('edit');

  return (
    <div className={styles.wrapper}>
      <PageHeader title={isEdit ? '스터디 수정하기' : '스터디 만들기'} />

      <PageCard>
        <CreateStudyForm mode={isEdit ? 'edit' : 'create'} studyId={studyId} />
      </PageCard>
    </div>
  );
};
