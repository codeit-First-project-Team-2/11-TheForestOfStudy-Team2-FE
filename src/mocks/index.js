import greenBg from "../assets/green.jpg";
import pinkBg from "../assets/pink.jpg";
import skyblueBg from "../assets/skyblue.jpg";
import study1Bg from "../assets/study1.jpg";

export const studiesMock = [
  {
    id: "01HV3001A9Q7R5M8Y6C1Z4E",
    nickname: "젠승황",
    title: "아침 루틴 스터디",
    introduction: "아침을 지배하면 하루가 편해진다.",
    background: greenBg,
    totalPoint: 145,
    createdAt: "2026-01-10T08:30:00.000Z",
    updatedAt: "2026-01-27T13:12:44.000Z",

    habits: [
      {
        id: "HABIT-001",
        name: "물 1컵",
        deletedAt: null,
        records: [
          { id: "R1", createdAt: "2026-01-26T08:00:00.000Z" }, // 월
          { id: "R2", createdAt: "2026-01-28T08:00:00.000Z" }, // 수
          { id: "R3", createdAt: "2026-01-29T08:00:00.000Z" }, // 목
        ],
      },
      {
        id: "HABIT-002",
        name: "스트레칭",
        deletedAt: null,
        records: [
          { id: "R4", createdAt: "2026-01-27T08:00:00.000Z" }, // 화
          { id: "R5", createdAt: "2026-01-30T08:00:00.000Z" }, // 금
        ],
      },
    ],

    emojis: [{ type: "🔥" }, { type: "🌱" }],
  },

  {
    id: "01HV3002Z8R7M9Q5B6C1Y4E",
    nickname: "민수",
    title: "퇴근 후 운동 기록",
    introduction: "하루 30분이라도 몸을 쓰자.",
    background: study1Bg,
    totalPoint: 32,
    createdAt: "2026-01-20T18:00:00.000Z",
    updatedAt: "2026-01-26T21:10:10.000Z",

    habits: [
      {
        id: "HABIT-003",
        name: "팔굽혀펴기",
        deletedAt: null,
        records: [
          { id: "R6", createdAt: "2026-01-26T19:00:00.000Z" }, // 월
          { id: "R7", createdAt: "2026-01-28T19:00:00.000Z" }, // 수
        ],
      },
    ],

    emojis: [{ type: "💪" }],
  },

  {
    id: "01HV3003M7R5ZQ9B6Y8C1E4",
    nickname: "소라",
    title: "감정 기록 스터디",
    introduction: "오늘의 감정을 솔직하게 남기기.",
    background: pinkBg,
    totalPoint: 0,
    createdAt: "2026-01-26T09:00:00.000Z",
    updatedAt: "2026-01-26T09:00:00.000Z",
    habits: [],
    emojis: [],
  },

  {
    id: "01HV3004Q5R8MZ9B7Y6C1E",
    nickname: "현우",
    title: "코딩 1일 1커밋",
    introduction: "작게라도 매일 남기기.",
    background: skyblueBg,
    totalPoint: 410,
    createdAt: "2025-12-01T10:00:00.000Z",
    updatedAt: "2026-01-27T01:40:00.000Z",

    habits: [
      {
        id: "HABIT-004",
        name: "커밋하기",
        deletedAt: null,
        records: [
          { id: "R8", createdAt: "2026-01-26T09:00:00.000Z" }, // 월
          { id: "R9", createdAt: "2026-01-27T09:00:00.000Z" }, // 화
          { id: "R10", createdAt: "2026-01-28T09:00:00.000Z" }, // 수
          { id: "R11", createdAt: "2026-01-29T09:00:00.000Z" }, // 목
          { id: "R12", createdAt: "2026-01-30T09:00:00.000Z" }, // 금
          { id: "R13", createdAt: "2026-01-31T09:00:00.000Z" }, // 토
          { id: "R14", createdAt: "2026-02-01T09:00:00.000Z" }, // 일
        ],
      },
    ],

    emojis: [{ type: "💻" }, { type: "🚀" }, { type: "🔥" }],
  },
];