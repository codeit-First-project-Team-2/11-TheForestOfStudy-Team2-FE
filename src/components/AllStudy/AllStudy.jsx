import { TextField } from '../ui/TextField/TextField';
import SearchIcon from '../../assets/ic_search.jpg';
import { StudyCard } from '../study/studyCard';
import styles from '../AllStudy/AllStudy.module.css';



export const AllStudy = ({
  studies,
  isLoading,
  morePage,
  keyword,
  setKeyword,
  onPageChange,
  selected,
  onOptionClick,
  isOpen,
  setIsOpen,
  options,
  onCardClick,
}) => {
  return (
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
              onPageChange(1); 
            }}
          />

          <div className={styles.selectContainer}>
            <div
              className={styles.selectBox}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={styles.selectedLabel}>{selected.label}</span>
              <span
                className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ''}`}
              >
                ▼
              </span>
            </div>

            {isOpen && (
              <ul className={styles.selectOptions}>
                {options.map((option) => (
                  <li
                    key={option.value}
                    className={`${styles.optionItem} ${selected.value === option.value ? styles.optionActive : ''}`}
                    onClick={() => onOptionClick(option)}
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
                <StudyCard
                  key={study.id}
                  data={study}
                  onClick={() => onCardClick(study)}
                />
              ))
            : !isLoading && (
                <p className={styles.noResult}>둘러 볼 스터디가 없어요</p>
              )}
        </div>

        {morePage && studies.length > 0 && (
          <button
            className={styles.moreButton}
            disabled={isLoading}
            onClick={() => onPageChange((prev) => prev + 1)}
          >
            {isLoading ? '불러오는 중...' : '더보기'}
          </button>
        )}
      </div>
    </section>
  );
};
