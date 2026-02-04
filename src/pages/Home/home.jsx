import styles from './Home.module.css';
import { TextField } from '@/components/ui/TextField/TextField';
import SearchIcon from '@/assets/ic_search.jpg';
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

const LIMIT = 6;

export const Home = () => {
  const [studies, setStudies] = useState([]);
  const [recentStudies, setRecentStudies] = useState([]);
  const [keyword, setKeyword] = useState('');

  const [page, setPage] = useState(1);
  const [morePage, setMorePage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: '-createdAt',
    label: '최근 순',
  });

  const options = [
    { value: '-createdAt', label: '최근 순' },
    { value: 'createdAt', label: '오래된 순' },
    { value: '-totalPoint', label: '많은 포인트 순' },
    { value: 'totalPoint', label: '적은 포인트 순' },
  ];

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
  useEffect(() => {
    let cancelled = false;

    const fetchStudies = async () => {
      if (!morePage || isLoading) return;

      setIsLoading(true);
      try {
        const res = await getStudyList({
          sort: selected.value,
          keyword,
          page,
        });

        if (cancelled) return;

        const newStudies = res.data || [];

        setStudies((prev) =>
          page === 1 ? newStudies : [...prev, ...newStudies],
        );

        if (newStudies.length < LIMIT) {
          setMorePage(false);
        }
      } catch (error) {
        if (!cancelled) {
          showToast.error(TOAST.STUDIES_LOAD_ERROR, error);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    const timer = setTimeout(fetchStudies, 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [keyword, selected.value, page, isLoading, morePage]);

  /* ---------------- 최근 조회 화면용 리스트 (최신 3개) ---------------- */
  const recentStudyList = recentStudyIds
    .slice(0, 3) // ⭐️ 최신 3개만
    .map(({ studyId }) => studies.find((study) => study.id === studyId))
    .filter(Boolean);

  /* ---------------- 카드 클릭 ---------------- */
  const handleStudyClick = (study) => {
    addRecentStudies(study);
    setRecentStudyIds(getRecentStudies());
    // navigate(`/studies/${study.id}`);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setPage(1);
    setMorePage(true);
    setIsOpen(false);
  };

  return (
    <main className={styles.homeLayout}>
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
    </main>
  );
};
