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

# 필요한 라이브러리 추가 설치 (필요시)
npm install clsx axios 


# 로컬 개발 서버 실행
npm run dev
```
> ⚠️ **주의:** `vanilla-extract` 사용 시, 스타일 파일 확장자는 반드시 **`.css.ts`**로 작성해야 합니다.

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
- **Styling**: Vanilla-Extract (Pretendard Font 적용)
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

다음은 임의로 만들어본 양식입니다.

# 📝 [공부의 숲 웹페이지(2팀 프로젝트)]

![배너 이미지]
<br/>
**한 줄 소개**: 스터디 사이트 "공부의 숲"의 웹페이지입니다. 

<br>

## 🔗 배포 링크 (v0.0.0) 
👉 [웹사이트 보러가기]

<br>

## 💡 프로젝트 소개 (Description)
**어떤 웹사이트인가요?**
이 프로젝트는 공부의 숲 웹 사이트를 개발하며 학습하기 위해 제작되었습니다. 팀 프로젝트를 수행하며 협업과 코딩실력을 향상시키는데 도움이 될 것입니다. ```VS code, Git, Figma``` 등 다양한 도구와 ```netfliy, Render``` 등의 사이트를 통해 배포할 것입니다. 

**개발 기간**
* 2026.01.20 ~ 계속

<br>

## 🛠 기술 스택 (Tech Stack)

| 분류 | 기술 |
| :-- | :-- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)|
| **Backend** | ![node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)| 
| **Styling** |![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)|
| **Tools** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white)|

<br>

## ✨ 주요 기능 (Key Features)
* ✅ **기능 1**: 
* ✅ **기능 2**: 
* ✅ **기능 3**: 

<br>

## 📸 스크린샷 (Screenshots)
| 메인 화면 | 기능 화면 |
| :--: | :--: |
| ![Main] | ![Feature] |
<br>

## 💻 실행 방법 (Installation)
이 프로젝트를 로컬 컴퓨터에서 실행하려면 터미널에 아래 명령어를 입력하세요.