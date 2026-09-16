# 와이즈코딩 울산 러닝센터 홈페이지

주소: 울산광역시 남구 문수로 433, 4층
전화: 070-7123-9066

HTML, CSS, JavaScript로 구성되어 별도 설치나 빌드 없이 사용할 수 있습니다.
학원 소개, 커리큘럼, 수상실적, 전화 상담, 네이버 지도 연결이 포함되어 있습니다.

## GitHub에 올리기

1. ZIP 파일을 압축 해제합니다.
2. GitHub에 로그인하고 새 저장소(Repository)를 만듭니다. 예: wisecoding-ulsan
3. 무료 계정에서 GitHub Pages를 이용하려면 Public 저장소로 만듭니다. 업로드한 소스와 홈페이지는 공개됩니다.
4. 저장소의 파일 업로드 기능(Add file → Upload files, 빈 저장소에서는 uploading an existing file)을 선택합니다.
5. 압축을 푼 파일을 모두 올리고 Commit changes로 저장합니다. ZIP 자체를 올리는 것이 아닙니다.
6. 저장소 첫 화면에 index.html이 바로 보이도록 올리세요. 상위 폴더 전체를 올려 index.html이 하위 폴더에 들어가지 않도록 합니다.

## 홈페이지 공개하기

1. 저장소의 Settings → Pages를 엽니다.
2. Build and deployment의 Source에서 Deploy from a branch를 선택합니다.
3. Branch에서 main, 폴더에서 /(root)를 선택하고 Save를 누릅니다.
4. 배포가 완료되면 Pages 화면에 표시되는 홈페이지 주소를 엽니다.
   일반적인 주소: https://깃허브아이디.github.io/저장소이름/
5. 배포 상태는 저장소 Actions 메뉴에서 확인할 수 있습니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 파일 안내

- index.html: 홈페이지 내용과 주소·전화번호
- style.css: 색상, 배치, 모바일 화면 디자인
- script.js: 모바일 메뉴 동작
- robot.png: 태권전사 휴머노이드 로봇 사진
- README.md: 이 안내문

## 수정 및 미리 보기

압축 해제 후 index.html을 더블 클릭하면 기본 화면을 볼 수 있습니다.
내용과 연락처는 index.html에서 수정합니다. 이미지 교체 시 robot.png라는 이름을 유지하면 됩니다.
구글 웹폰트는 인터넷 연결 시 불러오며, 연결되지 않으면 기본 글꼴로 표시됩니다.
이 파일 묶음에는 서버나 관리자 게시판이 없으며, 내용 수정은 파일을 편집한 뒤 다시 업로드하는 방식입니다.

로봇 사진은 원본을 바탕으로 AI 고해상도 보정한 상체 이미지입니다. 세부 형상은 원본과 차이가 있을 수 있습니다.

## 공지사항 팝업 수정하기

notice.js를 메모장 또는 GitHub 편집 화면에서 열어 수정하세요.
- enabled: true면 표시, false면 팝업을 끕니다.
- title: 공지 제목
- content: 공지 내용. 줄바꿈은 \n으로 입력합니다.
- image: 같은 폴더에 업로드한 이미지 파일명(예: notice-poster.jpg). ""이면 이미지 없이 표시합니다.
- imageAlt: 이미지에 담긴 내용을 간단히 설명합니다.
- id: 공지를 바꿀 때 새로운 값(예: notice-2026-10-01)으로 바꾸세요.

따옴표와 쉼표는 유지하세요. 내용 안에 큰따옴표를 넣으려면 \"로 입력합니다.
이미지에만 중요한 내용을 넣지 말고 content에도 적어주세요.
이미지는 잘리지 않도록 표시하며, 세로로 긴 포스터는 표시 크기가 줄어들 수 있습니다.
수정한 notice.js와 새 이미지를 GitHub에 올리면 공지가 바뀝니다.
첫 설정은 수업 상담 안내와 로봇 이미지입니다. 필요에 맞게 바꿔 사용하세요.
방문자는 닫기 또는 Esc로 팝업을 닫고, 상단 공지사항 메뉴로 다시 열 수 있습니다.
오늘 하루 보지 않기는 방문자 기기의 날짜를 기준으로 해당 브라우저에만 적용됩니다.
이 구성에는 웹 관리자나 이미지 업로드 서버가 없으며, 파일 수정으로 공지를 관리합니다.
