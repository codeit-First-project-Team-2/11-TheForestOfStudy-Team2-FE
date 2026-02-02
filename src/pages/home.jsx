import { useEffect, useState } from 'react';
import StudyCard from '../components/studycard';
// (매직 넘버 제거)
const INITIAL_PAGE = 1;
const INITIAL_TOTAL_PAGE = 1;
const LIMIT_PER_PAGE = 6;

export default function Home() {
  const [studies, setStudies] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [totalPage, setTotalPage] = useState(INITIAL_TOTAL_PAGE);
  const [loading, setLoading] = useState(false);

  // 검색
  const [keyword, setKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const isEmpty = !loading && studies.length === 0;

  const fetchStudies = async (pageNumber, keywordValue) => {
    setLoading(true);

    const params = new URLSearchParams({
      page: pageNumber,
      limit: LIMIT_PER_PAGE,
      keyword: keywordValue,
      sort: 'latest',
    });

    const res = await fetch(`/api?${params.toString()}`);
    const data = await res.json();

    if (pageNumber === INITIAL_PAGE) {
      setStudies(data.studies);
    } else {
      setStudies((prev) => [...prev, ...data.studies]);
    }

    setTotalPage(data.totalPage);
    setLoading(false);
  };

  // 최초 로딩 & 검색
  useEffect(() => {
    const firstPage = INITIAL_PAGE;

    setPage(firstPage);
    fetchStudies(firstPage, searchKeyword);
  }, [searchKeyword]);

  const handleSearch = () => {
    setSearchKeyword(keyword);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchStudies(nextPage, searchKeyword);
  };

  return (
    <section aria-busy={loading}>
      <h2>스터디 목록</h2>

      {/* 검색 */}
      <div>
        <input
          value={keyword}
          placeholder="스터디 제목 검색"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      {/* 상태 메시지 */}
      {loading && <p>불러오는 중...</p>}
      {!loading && isEmpty && <p>스터디가 없습니다.</p>}

      {/* 목록 */}
      {!loading && !isEmpty && (
        <ul className="study-list">
          {studies.map((study) => (
            <li key={study.id}>
              <StudyCard study={study} />
            </li>
          ))}
        </ul>
      )}

      {/* 더보기 */}
      {page < totalPage && !loading && (
        <button onClick={handleLoadMore}>더보기</button>
      )}
    </section>
  );
}