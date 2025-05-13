# 모동숲 가이드

### 프로젝트 개요
게임 '모여봐요 동물의 숲'의 공략 정보와 가이드를 제공하는 사이트로, 오픈 API인 [Nookipedia API](https://api.nookipedia.com/)와 [Animal-crossing 라이브러리](https://github.com/Norviah/animal-crossing/tree/master)를 이용하여 페이지를 구현하였습니다.

- 프로젝트 기간: 2024.10.31. - 2025.01.07.
- 참여 인원: 1명 (프론트엔드 1명)
- 배포 URL :  [https://animal-crossing-guide.vercel.app/](https://animal-crossing-guide.vercel.app/)

&nbsp;
### 주요 기능
- 주민 일람
- 생물 도감
- 아이템 카탈로그
- 레시피 도감
- 이벤트 일정
- 주민/생물/아이템 상세 페이지
- 메인 화면 Todo 목록
- 키워드 검색 및 카테고리 필터링


&nbsp;
### 기술 스택
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Axios](https://img.shields.io/badge/axios-%5A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)

&nbsp;
### 폴더 구조

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂card
 ┃ ┃ ┣ 📜creature-card.jsx
 ┃ ┃ ┣ 📜item-card.jsx
 ┃ ┃ ┣ 📜recipe-card.jsx
 ┃ ┃ ┗ 📜villager-card.jsx
 ┃ ┣ 📜dropdown.jsx
 ┃ ┣ 📜footer.jsx
 ┃ ┣ 📜header.jsx
 ┃ ┣ 📜layout.jsx
 ┃ ┣ 📜menubar.jsx
 ┃ ┗ 📜pagination.jsx
 ┣ 📂routes
 ┃ ┣ 📜creature-list.jsx
 ┃ ┣ 📜creatures.jsx
 ┃ ┣ 📜event-list.jsx
 ┃ ┣ 📜home.jsx
 ┃ ┣ 📜item-list.jsx
 ┃ ┣ 📜items.jsx
 ┃ ┣ 📜recipe-list.jsx
 ┃ ┣ 📜villager-list.jsx
 ┃ ┗ 📜villagers.jsx
 ┣ 📜App.js
 ┣ 📜font.css
 ┣ 📜index.js
 ┣ 📜loader.js
 ┣ 📜logo.svg
 ┣ 📜styled-card.js
 ┣ 📜styled-detail.js
 ┣ 📜styled-list.js
 ┗ 📜utilities.js

```

&nbsp;
## 프로젝트 화면

<img src="https://github.com/user-attachments/assets/fc92265e-e27a-4e88-88e5-604295251c3b" alt="Image 1" />
<img src="https://github.com/user-attachments/assets/58d34d21-7573-4967-bfd5-96a08dd9b675" alt="Image" />
<img src="https://github.com/user-attachments/assets/3e3f4ba1-44f5-4c22-9950-3b7b2c8d3877" alt="Image" />
<img src="https://github.com/user-attachments/assets/8e885ef3-3e95-4182-8551-1bba7c4a0119" alt="Image" />
<img src="https://github.com/user-attachments/assets/eddbc338-ecb7-466a-a608-b56996a66918" alt="Image" />
<img src="https://github.com/user-attachments/assets/eb193d5f-574f-4db4-9359-92d4fa205833" alt="Image" />
<img src="https://github.com/user-attachments/assets/b20c97f9-d3de-4737-9a30-00b1888756e5" alt="Image" />
<img src="https://github.com/user-attachments/assets/e3eb09aa-c633-487c-af58-ec6470a9a871" alt="Image" />

