import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getStudyList } from '../../apis/homeService';
import { verifyStudyPassword } from '@/apis/studyService';
import { showToast } from '@/utils/toast.util';
import { TOAST } from '@/constants/error';
import {
  addRecentStudies,
  syncRecentStudies,
} from '@/utils/localStorage.util';
import { RecentStudy } from '../../components/RecentStudy/RecentStudy';
import { AllStudy } from '../../components/AllStudy/AllStudy';
import { PasswordModal } from '@/components/PasswordModal/PasswordModal';
import useStudyStore from '../../stores/useStudyStore';
import styles from './Home.module.css';

const LIMIT = 6;

export const Home = () => {
  const nav = useNavigate();
  const { setStudyData } = useStudyStore();

  const [studies, setStudies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [morePage, setMorePage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState({
    value: '-createdAt',
    label: '최근 순',
  });

  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [selectedStudyId, setSelectedStudyId] = useState(null);
  const [recentTrigger, setRecentTrigger] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const fetchStudies = async () => {
      if (!morePage && page !== 1) return;
      setIsLoading(true);
      try {
        const res = await getStudyList({ sort: selected.value, keyword, page });
        if (cancelled) return;
        const newStudies = res.data || [];
        setStudies((prev) => {
          const updated = page === 1 ? newStudies : [...prev, ...newStudies];
          if (updated.length > 0) syncRecentStudies(updated);
          return updated;
        });
        if (newStudies.length < LIMIT) setMorePage(false);
      } catch (error) {
        if (!cancelled) showToast.error(TOAST.STUDIES_LOAD_ERROR, error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    const timer = setTimeout(fetchStudies, 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [keyword, selected.value, page, morePage]);

  const handleStudyClick = (study) => {
    setSelectedStudyId(study.id);
    setIsVerifyOpen(true);
  };

  const handleVerifyConfirm = async (password) => {
    try {
      const data = await verifyStudyPassword(selectedStudyId, password);
      setStudyData(data);
      addRecentStudies(data);
      setRecentTrigger((prev) => prev + 1);
      setIsVerifyOpen(false);
      nav(`/studies/${selectedStudyId}`);
    } catch (error) {
      showToast.error('비밀번호가 일치하지 않습니다.', error);
    }
  };

  return (
    <main className={styles.homeLayout}>
      <RecentStudy
        allStudies={studies}
        onCardClick={handleStudyClick}
        key={recentTrigger}
      />
      <AllStudy
        studies={studies}
        isLoading={isLoading}
        morePage={morePage}
        keyword={keyword}
        setKeyword={setKeyword}
        onPageChange={setPage}
        selected={selected}
        onOptionClick={(opt) => {
          setSelected(opt);
          setPage(1);
          setMorePage(true);
        }}
        onCardClick={handleStudyClick}
      />
      <PasswordModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        title="스터디 입장"
        onConfirm={handleVerifyConfirm}
      />
    </main>
  );
};
