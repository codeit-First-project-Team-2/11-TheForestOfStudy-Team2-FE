import { useState } from 'react';
import StudyCard from '../components/studycard';
import '../styles/Home.css';

const MOCK_STUDIES = [
  {
    id: 1,
    title: '리액트 스터디',
    nickname: '동철',
    introduction: '리액트 기초부터 같이 공부해요',
    emoji: '🔥',
    backgroundImage: '/',
    totalPoint: 120,
    daysAfterCreated: 3,
  },
  {
    id: 2,
    title: '알고리즘 스터디',
    nickname: '코딩왕',
    introduction: '하루 한 문제!',
    emoji: '🧠',
    backgroundImage: '/',
    totalPoint: 80,
    daysAfterCreated: 7,
  },
  {
    id: 3,
    title: '노드JS 스터디',
    nickname: '서버짱',
    introduction: '백엔드 기초부터 실습까지',
    emoji: '💻',
    backgroundImage: '/images/',
    totalPoint: 95,
    daysAfterCreated: 2,
  },
  {
    id: 4,
    title: '프론트엔드 스터디',
    nickname: '화면천재',
    introduction: 'UI/UX 감각 키우기',
    emoji: '🎨',
    backgroundImage: '/images/',
    totalPoint: 110,
    daysAfterCreated: 5,
  },
  {
    id: 5,
    title: '타입스크립트 스터디',
    nickname: '타입마스터',
    introduction: '타입 안정성 확보하기',
    emoji: '📝',
    backgroundImage: '/images/',
    totalPoint: 70,
    daysAfterCreated: 6,
  },
  {
    id: 6,
    title: '자료구조 스터디',
    nickname: '메모리왕',
    introduction: '자료구조 완전 정복!',
    emoji: '📚',
    backgroundImage: '/images/bg6.png',
    totalPoint: 130,
    daysAfterCreated: 1,
  },
];

export default function Home() {
  const [studies] = useState(MOCK_STUDIES);
  const isEmpty = studies.length === 0;

  return (
    <main className="home">
      <section className="home-header">
        <h2 className="home-title">스터디 목록</h2>

        <div className="search-box">
          <input placeholder="스터디 제목 검색" />
          <button>검색</button>
        </div>
      </section>

      <section className="study-section">
        {isEmpty ? (
          <p className="empty-text">아직 생성된 스터디가 없습니다.</p>
        ) : (
          <ul className="study-list">
            {studies.map((study) => (
              <li key={study.id}>
                <StudyCard study={study} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="load-more">
        <button>더보기</button>
      </div>
    </main>
  );
}