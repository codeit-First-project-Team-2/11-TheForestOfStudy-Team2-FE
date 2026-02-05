import styles from './Home.module.css';
import { TextField } from '@/components/ui/TextField/TextField';
import SearchIcon from '@/assets/ic_search.jpg';
import { useEffect, useState } from 'react';
import { getStudyList } from '@/apis/homeService';
import { showToast } from '@/utils/toast.util';
import { TOAST } from '@/constants/error';
import { StudyCard } from '@/components/study/studyCard';

const LIMIT = 6;

export const Home = () => {
  const [studies, setStudies] = useState([]);
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

  const handleOptionClick = (option) => {
    setSelected(option);
    setPage(1);
    setMorePage(true);
    setIsOpen(false);
  };

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

        // 6개 미만이면 더 이상 없음
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

  return (
    <main className={styles.homeLayout}>
      <section className={styles.latestStudyContainer}>
        <div className={styles.latestStudyInnerContainer}>
          <h3 className={styles.homeTitlewrapper}>최근 조회한 스터디</h3>
          <div className={styles.cardWapper}>
            {studies.length > 0
              ? studies.map((study) => (
                  <StudyCard key={study.id} data={study} />
                ))
              : !isLoading && <p>조회한 스터디가 없습니다.</p>}
          </div>
        </div>
      </section>

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
                      className={`
                        ${styles.optionItem}
                        ${
                          selected.value === option.value
                            ? styles.optionActive
                            : ''
                        }
                      `}
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
            {studies.length > 0
              ? studies.map((study) => (
                  <StudyCard key={study.id} data={study} />
                ))
              : !isLoading && <p>검색 결과가 없습니다.</p>}
          </div>

          {morePage && (
            <button
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
