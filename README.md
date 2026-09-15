# 와이즈코딩 울산 러닝센터 홈페이지

기존에 만든 홈페이지를 GitHub에 올릴 수 있도록 구성한 정적 웹사이트입니다.
별도 설치나 빌드 없이 사용할 수 있습니다.

## 파일 구성

- index.html: 홈페이지 내용과 전화번호
- style.css: 디자인과 모바일 화면 설정
- robot.png: 로봇 콘셉트 이미지 (실제 학원 로봇 사진이 아닌 AI 생성 이미지)
- .nojekyll: GitHub Pages에서 정적 파일을 그대로 제공하기 위한 설정
- README.md: 업로드 및 수정 안내

## GitHub에 파일 올리기

1. ZIP 파일을 다운로드한 후 압축을 풉니다.
2. GitHub에 로그인하고 새 저장소를 만듭니다. 이름 예: wisecoding-ulsan
3. GitHub Free를 사용하는 경우 GitHub Pages용 저장소는 Public으로 만듭니다.
4. 저장소의 파일 업로드 화면에서 압축을 푼 파일들을 올립니다. ZIP 자체를 올리는 것이 아닙니다.
5. index.html, style.css, robot.png가 저장소 최상위에 나란히 있어야 합니다.
6. Commit changes로 저장합니다.

## 홈페이지 주소 만들기 (GitHub Pages)

1. 저장소에서 Settings → Pages를 엽니다.
2. Build and deployment의 Source를 Deploy from a branch로 선택합니다.
3. Branch를 main, 폴더를 / (root)로 선택하고 Save를 누릅니다.
   기본 브랜치 이름이 다르면 파일을 올린 브랜치를 선택합니다.
4. 배포 완료 후 Pages 화면에 표시되는 홈페이지 주소를 엽니다.
   일반적인 프로젝트 주소: https://사용자이름.github.io/저장소이름/

GitHub Pages로 게시하면 방문자가 볼 수 있는 공개 홈페이지가 됩니다.
현재 ChatGPT에서 확인하는 사이트의 비공개 설정은 이 파일에 포함되지 않습니다.

## 내 컴퓨터에서 확인하기

압축을 푼 폴더의 index.html을 브라우저로 열면 됩니다.
Google Fonts 글꼴은 인터넷 연결이 있을 때 불러옵니다.
연결이 없으면 기기의 기본 글꼴로 표시됩니다.

## 내용 수정하기

- 문구·수상 내역·학원 소개: index.html 수정
- 상담 전화번호: 화면의 070-7123-9066과 tel:07071239066을 함께 수정
- 색상·글자 크기·레이아웃: style.css 수정
- 로봇 사진: robot.png를 같은 이름의 사진으로 교체하고 index.html의 이미지 설명과 콘셉트 이미지 표기도 수정

학원 주소는 아직 포함되지 않았습니다. 실제 주소와 수업 사진을 추가할 수 있습니다.
업로드 후 변경 사항을 커밋하면 GitHub Pages에 반영됩니다.

## 공식 안내

https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
