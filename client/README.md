## Settings

- jsx pragma (emotion css prop 사용 설정)
- craco-alias (절대경로 세팅)
- twin.marco preset (emotion 사용 설정)
- ESLint (airbnb style guide)
- Prettier

---

## Folder Structure

```
📦 src
├─ constants // 상수 관리 폴더
├─ context // 리액트 컨텍스트 폴더
├─ components // 컴포넌트 폴더
│  ├─ hoc // higher order 컴포넌트 폴더
│  ├─ shared // 공유 컴포넌트 폴더
│  ├─ Landing // Landing page에 대응되는 폴더
│  ├─ MyPage // MyPage page에 대응되는 폴더
│  └─ Signup // Signup page에 대응되는 폴더
├─ hooks // 커스텀 훅 폴더
├─ middlewares // 리덕스 미들웨어 폴더
├─ pages // 라우팅 되는 페이지 컴포넌트 폴더
│  ├─ Landing.jsx
│  ├─ MyPage.jsx
│  └─ Signup.jsx
├─ services // api 요청 로직 폴더
├─ store // 리덕스 중앙 관리 폴더
│  ├─ _actions // 액션 생성 함수 폴더
│  ├─ _reducers // 리듀서 폴더
│  └─ configureStore.js // 스토어 설정 파일
├─ styles // 글로벌 스타일 관련 폴더
├─ utils // 유틸, 헬퍼 함수 폴더
├─ App.jsx
└─ index.jsx
```
