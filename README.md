# 🌳 공부의 숲 (The Forest of Study) - FE

이 레포지토리는 **공부의 숲** 프로젝트의 프론트엔드 저장소입니다.  
일관된 협업을 위해 아래의 가이드를 반드시 준수해 주세요.

---

## 🚀 시작하기

### 1. 프로젝트 불러오기
```bash
# 레포지토리 클론
git clone https://github.com/codeit-First-project-Team-2/11-TheForestOfStudy-Team2-FE.git

# 폴더 이동
cd 11-TheForestOfStudy-Team2-FE

# 내 작업 브랜치 생성 및 이동
git switch -c feature/<기능명>
```

### 2. 패키지 설치 및 실행
```bash
# 의존성 설치
npm install

# 필요한 라이브러리 추가 설치 (넘어가도 됩니다. 설치한 라이브러리 목록이라고 생각해주세요!)
npm install clsx axios zustand immer


# 로컬 개발 서버 실행
npm run dev
```

### 3. pull / push (⚠️ Git 충돌 방지 규칙)
```bash
# 아래 과정 반복
pull -> coding -> commit -> push -> (PR)

# 작업 시작할때
git checkout develop
git pull origin develop

# pull 할때는 부모 브랜치(develop) 기준으로!
git checkout feature/...
git pull origin develop
```
**!!! 반드시 pull 해야 하는 타이밍?**

- **작업 시작하기 직전**
- **브랜치 전환 직후**
- **어제 작업하고 오늘 다시 시작할 때**
- **PR 머지된 뒤**

---

## 💡 만약 로컬에서 코드를 먼저 작성했다면?

이미 작업 중인 폴더가 있는 경우, 아래 순서대로 진행하여 연결하세요.

1. **초기화:** `git init`
2. **체크:** `.gitignore` 파일이 있는지 반드시 확인 (없으면 생성)
3. **커밋:** `git add .` -> `git commit -m "init: 프로젝트 초기 세팅"`
4. **연결:** `git remote add origin https://github.com/codeit-First-project-Team-2/11-TheForestOfStudy-Team2-FE.git`
5. **푸시:** `git push -u origin <브랜치명>`

---

## 🛠 기술 스택

- **Framework**: React (Vite)
- **Language**: JavaScript
- **Styling**: css (Pretendard Font 적용)
- **Linting**: ESLint, Prettier

---

## 📂 폴더 구조 (src/)

```text
src/
├── apis/       # API 통신 로직 및 Axios 인스턴스
├── assets/     # 정적 파일 (이미지, 아이콘 등)
├── components/ # 공통 UI 컴포넌트 (작은 단위)
├── constants/  # 상수 관리 (API 주소, 메시지 등)
├── hooks/      # 커스텀 훅
├── pages/      # 페이지 단위 컴포넌트 (큰 단위)
├── mocks/      # 개발용 Mock 데이터
├── providers/  # Context API / State 관리
└── styles/     # 전역 스타일 및 폰트 설정
```

---

## 📝 커밋 메시지 컨벤션

  **메세지는 영어가 아닌 한글로 적어주세요!**

- **feat** : 새로운 기능 추가
- **fix** : 버그 수정
- **design** : CSS 및 UI 디자인 변경
- **docs** : 문서 추가, 수정, 삭제
- **test** : 테스트 코드 추가, 수정, 삭제
- **refactor** : 코드 리팩토링
- **style** : 코드 형식 변경 (세미콜론 등, 기능 변화 X)
- **chore** : 빌드 설정, 패키지 매니저 수정
- **init** : 프로젝트 초기 세팅
- **rename** : 파일/폴더명 수정 또는 이동
- **remove** : 파일 삭제
- **add** : 파일 추가
- **etc** : 기타 작업

---

## 🌿 브랜치 전략

- **main**: 최종 배포용 최상위 브랜치
- **develop**: 개발의 중심이 되는 브랜치
- **feature/<기능명>**: 새로운 기능을 개발하는 브랜치 (완료 후 develop에 merge 후 삭제)
- **hotfix**: 배포된 버전에서 발생한 긴급 버그 수정용 브랜치


</br>
</br>
</br>
</br>
</br>
----------------------------------------------------------

다음은 임시로 만든 양식입니다.

# 🚀 {2팀}

> **배움의 기쁨을 세상 모두에게 전할 수 있는 프로그래밍 교육 사이트 제작**

---

## 🔗 프로젝트 링크
* **[팀 협업 문서]({팀 협업 문서 링크 게시})**
* **[배포 사이트](https://www.codeit.kr/)**

## 👥 팀원 구성
* **예진**: [Github]({개인 Github 링크})
* **동철**: [Github]({개인 Github 링크})
* **은혜**: [Github]({개인 Github 링크})
* **에스더**: [Github]({개인 Github 링크})
* **민성**: [Github]({개인 Github 링크})

## 📅 프로젝트 기간
* **2026.01.20 ~ 2026.02.06**

## 🛠 기술 스택
* **Frontend**: JavaScript, React.js, 
* **Backend**: Express.js, PrismaORM,
* **Database**: MongoDB,
* **Common**: Git & Github, Discord

---

## 💻 팀원별 구현 기능 상세

### 👤 예진
- **소셜 로그인 기능**: 구글 소셜 로그인 API 사용으로 소셜 로그인 기능 구현
- **회원 추가 정보 입력 기능**: 소셜 로그인 후 회원 추가 정보 입력 기능
- **조건부 렌더링**: user 타입(관리자, 학생)에 대한 조건부 추가 입력 모달창 및 페이지 이동 기능 구현

### 👤 동철
- **Nav**: 회원별 버튼 조건부 렌더링(학생/관리자), 반응형 레이아웃 구현
- **메인 페이지**: fetch(POST, GET)를 사용하여 무료 수강 종료 시간 기능 구현
- **공용 컴포넌트**: 프로젝트 전반에서 사용하는 Modal 컴포넌트 구현

### 👤 은혜
- **마이 페이지**: fetch(GET)를 사용하여 수강생 개인별 시간 정보 표시
- **반응형 레이아웃**: 페이지 전반의 반응형 디자인 적용
- **공용 컴포넌트**: 공용으로 사용할 Button 컴포넌트 구현

### 👤 에스더
- **관리자 페이지**: Path parameter를 사용하여 학생 페이지와 동적 라우팅 기능 구현
- **Carousel 슬라이더**: 학생별 정보 목록 슬라이더 구현
- **학생 정보 CRUD**: fetch(POST, PATCH, DELETE)를 사용하여 학생 정보 관리 및 탈퇴 기능 구현

### 👤 민성
- **관리자 페이지**: fetch(GET)를 사용하여 학생별 시간 및 수강생 접속 현황 정보 표시
- **마이 페이지**: fetch(PATCH, DELETE)를 사용하여 수강생 정보 수정 및 탈퇴 기능 구현
- **공용 컴포넌트**: 공용으로 사용할 Modal 컴포넌트 구현

---

## 📂 파일 구조

```text
src
 ┣ apis
 ┣ assets
 ┣ components
 ┣ constants
 ┣ hooks
 ┣ mocks
 ┣ pages
 ┣ providers
 ┣ styles
 ┃ ┣ fonts.css
 ┃ ┣ index.css
 ┃ ┗ reset.css
 ┣ .gitkeep
 ┣ App.jsx
 ┗ main.jsx
 ```