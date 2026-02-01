import { useEffect, useState } from 'react';
import Pagenation from '../components/pagenation';

export default function Home() {
  const [studies, setStudies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // 검색 상태
  const [keyword, setKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchStudies = async (pageNumber, keywordValue) => {
    const params = new URLSearchParams({
      page: pageNumber,
      limit: 6,
      keyword: keywordValue,
      sort: 'latest',
    });

    const res = await fetch(`/api?${params.toString()}`);
    const data = await res.json();

    setStudies(data.studies);
    setTotalPage(data.totalPage);
    setPage(data.currentPage);
  };

  // 최초 & 페이지 변경
  useEffect(() => {
    fetchStudies(page, searchKeyword);
  }, [page, searchKeyword]);

  //  검색 실행
  const handleSearch = () => {
    setPage(1);
    setSearchKeyword(keyword);
  };

  return (
    <div>
      <h2>스터디 목록</h2>

      {/* 검색 input */}
      <div>
        <input
          type="text"
          placeholder="스터디 제목 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      {/*  목록 */}
      <ul>
        {studies.length === 0 ? (
          <li>검색 결과가 없습니다.</li>
        ) : (
          studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title}</h3>
              <p>포인트: {study.totalPoint}</p>
              <p>생성일: {study.createdAt}</p>
            </li>
          ))
        )}
      </ul>

      {/* 페이지네이션 */}
      <Pagenation
        currentPage={page}
        totalPage={totalPage}
        onPageChange={setPage}
      />
    </div>
  );
}
