<<<<<<< HEAD
<<<<<<< HEAD
import styles from './Home.module.css';
import { TextField } from '@/components/ui/TextField/TextField';
import SearchIcon from '@/assets/ic_search.jpg';
=======
>>>>>>> 0ed3cc7 (feat:studyCard 데이터 정렬)
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getStudyList } from '@/apis/homeService';
import { showToast } from '@/utils/toast.util';
import { TOAST } from '@/constants/error';
import { StudyCard } from '@/components/study/studyCard';
=======
import { getStudyList } from '../../apis/homeService';
import { showToast } from '../../utils/toast.util';
import { TOAST } from '../../constants/error';
<<<<<<< HEAD
<<<<<<< HEAD

import { StudyCard } from '../../components/study/studyCard';
<<<<<<< Updated upstream

>>>>>>> fdd3dd4 (fix: 더보기 버튼 로직 변경)

=======
=======
>>>>>>> 583213f (feat:최근 조회 스터디 로직작성)
import {
  getRecentStudies,
  addRecentStudies,
} from '../../utils/localStorage.util';
import { StudyCard } from '../../components/study/studyCard';
=======
import { addRecentStudies } from '../../utils/localStorage.util';
=======
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { getStudyList } from '../../apis/homeService';
import { verifyStudyPassword } from '../../apis/studyService';
import { showToast } from '../../utils/toast.util';
import { TOAST } from '../../constants/error';
import {
  addRecentStudies,
  syncRecentStudies,
<<<<<<< HEAD
} from '../../utils/localStorage.util'; // sync 추가
>>>>>>> 3d72695 (feat:최근 조회한 스터디 로컬스토리지 저장 기능)
=======
} from '../../utils/localStorage.util';
>>>>>>> e166051 (feat: 비밀번호 모달 컴포넌트화,홈,스터디상세에 적용)
import { RecentStudy } from '../../components/RecentStudy/RecentStudy';
import { AllStudy } from '../../components/AllStudy/AllStudy';
import { PasswordModal } from '../../components/PasswordModal/PasswordModal';
import useStudyStore from '../../stores/useStudyStore';
import styles from './Home.module.css';
>>>>>>> 0ed3cc7 (feat:studyCard 데이터 정렬)

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

  // 모달 제어 상태
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [selectedStudyId, setSelectedStudyId] = useState(null);
  const [recentTrigger, setRecentTrigger] = useState(0);

<<<<<<< HEAD
  const options = [
    { value: '-createdAt', label: '최근 순' },
    { value: 'createdAt', label: '오래된 순' },
    { value: '-totalPoint', label: '많은 포인트 순' },
    { value: 'totalPoint', label: '적은 포인트 순' },
  ];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const handleOptionClick = (option) => {
    setSelected(option);
    setPage(1);
    setMorePage(true);
    setIsOpen(false);
  };
=======
  /* ---------------- 최근 조회 ID 로드 ---------------- */
  useEffect(() => {
    setRecentStudyIds(getRecentStudies());
  }, []);
>>>>>>> 583213f (feat:최근 조회 스터디 로직작성)

  /* ---------------- 서버 데이터 fetch ---------------- */
=======
  // API 호출 로직
>>>>>>> 0ed3cc7 (feat:studyCard 데이터 정렬)
=======
  // API 호출 및 데이터 동기화 로직
>>>>>>> 3d72695 (feat:최근 조회한 스터디 로컬스토리지 저장 기능)
=======
>>>>>>> e166051 (feat: 비밀번호 모달 컴포넌트화,홈,스터디상세에 적용)
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
  }, [keyword, selected.value, page]);

  // 카드 클릭 시 모달 열기
  const handleStudyClick = (study) => {
    setSelectedStudyId(study.id);
    setIsVerifyOpen(true);
  };

  // 모달에서 비번 확인 성공 시 실행
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* ---------------- 최근 조회 ---------------- */}
      <section className={styles.latestStudyContainer}>
        <div className={styles.latestStudyInnerContainer}>
          <h3 className={styles.homeTitlewrapper}>최근 조회한 스터디</h3>
          <div className={styles.cardWapper}>
<<<<<<< HEAD
            {studies.length > 0
              ? studies.map((study) => (
                  <StudyCard key={study.id} data={study} />
                ))
              : !isLoading && <p>조회한 스터디가 없습니다.</p>}
=======
            {recentStudyList.length > 0 ? (
              recentStudyList.map((study) => (
                <StudyCard
                  key={`recent-${study.id}`}
                  data={study}
                  onClick={() => handleStudyClick(study)}
                />
              ))
            ) : (
              <p className={styles.noResult}>조회한 스터디가 없습니다.</p>
            )}
>>>>>>> 583213f (feat:최근 조회 스터디 로직작성)
          </div>
        </div>
      </section>

      {/* ---------------- 전체 스터디 ---------------- */}
      <section className={styles.AllStudyContainter}>
        <div className={styles.latestStudyInnerContainer}>
          <h3 className={styles.homeTitlewrapper}>스터디 둘러보기</h3>

          <div className={styles.searchSortContainer}>
            <img
              className={styles.searchImgWrapper}
              src={SearchIcon}
              alt="search"
            />
            <TextField
              value={keyword}
              className={styles.TextFieldWrapper}
              placeholder="검색"
              onChange={(e) => {
                setKeyword(e.target.value);
                setPage(1);
                setMorePage(true);
              }}
            />

            <div className={styles.selectContainer}>
              <div
                className={styles.selectBox}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={styles.selectedLabel}>{selected.label}</span>
                <span
                  className={`${styles.arrowIcon} ${
                    isOpen ? styles.arrowOpen : ''
                  }`}
                >
                  ▼
                </span>
              </div>

              {isOpen && (
                <ul className={styles.selectOptions}>
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className={`${styles.optionItem} ${
                        selected.value === option.value
                          ? styles.optionActive
                          : ''
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={styles.cardWapper}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            {studies.length > 0
              ? studies.map((study) => (
                  <StudyCard key={study.id} data={study} />
                ))
<<<<<<< HEAD
              : !isLoading && <p>검색 결과가 없습니다.</p>}
=======
              : !isLoading && (
                  <p className={styles.noResult}>둘러 볼 스터디가 없어요</p>
                )}
>>>>>>> fdd3dd4 (fix: 더보기 버튼 로직 변경)
=======
=======
>>>>>>> d4021fe (fix:충돌수정)
            {studies.length > 0 ? (
              studies.map((study) => (
                <StudyCard
                  key={study.id}
                  data={study}
                  onClick={() => handleStudyClick(study)}
                />
              ))
            ) : (
              !isLoading && (
                <p className={styles.noResult}>
                  둘러 볼 스터디가 없어요
                </p>
              )
            )}
<<<<<<< HEAD
>>>>>>> 583213f (feat:최근 조회 스터디 로직작성)
=======
=======
=======
>>>>>>> e2fa022 (fix: 홈 충돌 코드 수정)
            {studies.length > 0
              ? studies.map((study) => (
                  <StudyCard
                    key={study.id}
                    data={study}
                    onClick={() => handleStudyClick(study)}
                  />
                ))
              : !isLoading && (
                  <p className={styles.noResult}>둘러 볼 스터디가 없어요</p>
                )}
<<<<<<< HEAD
>>>>>>> e4ec000 (fix: 자잘한 수정)
>>>>>>> d4021fe (fix:충돌수정)
=======
>>>>>>> e2fa022 (fix: 홈 충돌 코드 수정)
          </div>

          {morePage && studies.length > 0 && (
            <button
              className={styles.moreButton}
              disabled={isLoading}
              onClick={() => setPage((prev) => prev + 1)}
            >
              {isLoading ? '불러오는 중...' : '더보기'}
            </button>
          )}
        </div>
      </section>
=======
      <RecentStudy allStudies={studies} onCardClick={handleStudyClick} />
=======
      {/* recentUpdateTrigger를 key나 prop으로 넘겨서 
         로컬스토리지가 변했을 때 RecentStudy가 인지하도록 합니다.
      */}
=======
>>>>>>> e166051 (feat: 비밀번호 모달 컴포넌트화,홈,스터디상세에 적용)
      <RecentStudy
        allStudies={studies}
        onCardClick={handleStudyClick}
        key={recentTrigger}
      />
<<<<<<< HEAD
>>>>>>> 3d72695 (feat:최근 조회한 스터디 로컬스토리지 저장 기능)

=======
>>>>>>> e166051 (feat: 비밀번호 모달 컴포넌트화,홈,스터디상세에 적용)
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
<<<<<<< HEAD
>>>>>>> 0ed3cc7 (feat:studyCard 데이터 정렬)
=======
      <PasswordModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        title="스터디 입장"
        onConfirm={handleVerifyConfirm}
      />
>>>>>>> e166051 (feat: 비밀번호 모달 컴포넌트화,홈,스터디상세에 적용)
    </main>
  );
};
