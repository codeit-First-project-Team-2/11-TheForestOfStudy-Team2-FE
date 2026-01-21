## 시작하기

### 불러오기

터미널에 다음 입력 ->

git clone https://github.com/codeit-First-project-Team-2/11-TheForestOfStudy-Team2-FE.git

cd 11-TheForestOfStudy-Team2-FE

git switch -c <새로운 feature/브런치> 

### 설치

npm install

### 사용 라이브러리 (필요한 라이브러리 추가하기)

npm install clsx axios

### 코드 작성

git pull (처음에는 x)

git push -u origin <브런치명> --> 이후에 git push만 입력하면 됨

### 만약 로컬에서 코드 먼저 작성하셨다면? --> 해당 폴더 터미널에서

git init

.gitignore 파일 확인(주의!)

git add .

git commit -m "<메세지내용>"

git remote add origin https://github.com/codeit-First-project-Team-2/11-TheForestOfStudy-Team2-FE.git

git push -u origin <브런치명>

### 실행

npm run dev

## 기술 스택

- Framework: React (Vite)

- Language: JavaScript

- Styling: CSS (Pretendard Font 적용)

- Linting: ESLint, Prettier

## src/ 기본구조

src/
├── apis/ # API 통신 로직
├── assets/ # 정적 파일 (이미지 등)
├── components/ # 공통 작은 컴포넌트
├── constants/ # 상수 관련
├── hooks/ # 커스텀 훅
├── pages/ # 페이지 같이 큰 컴포넌트
├── providers/ # Context/State 관리
└── styles/ # 전역 스타일 및 폰트

## 커밋메세지 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- design : CSS, UI 디자인 변경
- docs : 문서 추가, 수정, 삭제
- test : 테스트 코드 추가, 수정, 삭제
- refactor: 코드 리팩토링
- style : 기능에 영향을 주지 않는 코드 형식 변경
- chore : 빌드 스크립트, 패키지 매니저 수정
- rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업
- remove : 파일을 삭제하는 작업
- add : 파일추가
- etc : 기타 작업
- init : 프로젝트 초기 세팅

## 브랜치 전략

- main: 최종 배포용 브랜치
- develop: 개발 중심 브랜치
- feature/<기능명>: 신규 기능 개발 --> develop 브런치에 merge 후 삭제
- hotfix: 긴급 버그 수정 --> develop 브런치에 merge 후 삭제
