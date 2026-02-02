import { useEffect, useState } from 'react';

const LIMIT_PER_PAGE = 6;

export default function Home() {
  const [studies, setStudies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
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

    const res = await fetch(`/api/studies?${params.toString()}`);
    const data = await res.json();

    // 더보기 핵심
    if (pageNumber === 1) {
      setStudies(data.studies);
    } else {
      setStudies((prev) => [...prev, ...data.studies]);
    }

    setTotalPage(data.totalPage);
    setLoading(false);
  };

  // 최초 로딩 & 검색
  useEffect(() => {
    setPage(1);
    fetchStudies(1, searchKeyword);
  }, [searchKeyword]);

  //  검색 실행
  const handleSearch = () => {
    setSearchKeyword(keyword);
  };

  //  더보기
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchStudies(nextPage, searchKeyword);
  };

  return (
    <section>
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

      {/* 목록 */}
      <ul>
        {loading ? (
          <li>불러오는 중...</li>
        ) : isEmpty ? (
          <li>스터디가 없습니다.</li>
        ) : (
          studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title}</h3>
              <p>포인트: {study.totalPoint}</p>
              <p>생성 후 {study.daysAfterCreated}일</p>
            </li>
          ))
        )}
      </ul>

      {/* 더보기 */}
      {page < totalPage && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? '불러오는 중...' : '더보기'}
        </button>
      )}
    </section>
  );
}