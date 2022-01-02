# bo-user-starter

:smiley: 블록오디세이를 위한 React 사용자 Boilerplate v1입니다. :smiley:

## 프로젝트 주요 기능

-   **STYLING** : [scss](https://sass-lang.com/guide "sass/scss")
-   **HTTP CLIENT** : [axios](https://github.com/axios/axios "axios")
-   **SERVER STATE DATA MANAGEMENT** : [react-query](https://react-query.tanstack.com/ "react-query")
-   **ROUTING AND NAVIGATION** : [react-router-dom](https://reactrouter.com/web/guides/quick-start "react-router-dom")
-   **STATE MANAGEMENT** : [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
-   **FORM** : [react-hook-form](https://react-hook-form.com/get-started "react-hook-form")
-   **TYPE CHECK** : [prop-types](https://github.com/facebook/prop-types "prop-types")

## 프로젝트 설치

<pre><code> $ npx bo-user-starter projectname </code></pre>

:fire: `npm i bo-user-starter` 명령어를 사용하면 프로젝트가 정상적으로 설치되지 않습니다. :fire:

## 시작하기

### 의존성 패키지 설치

 <pre><code> $ cd projectname

 $ npm install
</code></pre>

### 실행 전에

 <pre>프로젝트의 최상단 경로에 .env 파일을 추가해주세요.</pre>

### 프로젝트 실행

 <pre><code>$ npm start </code></pre>

---

## 프로젝트 구조

```
 .
 ┣ .github
 ┃ ┣ ISSUE_TEMPLATE
 ┃ ┃ ┣ bug_report.md
 ┃ ┃ ┗ feature_request.md
 ┃ ┗ pull_request_template.md
 ┣ public
 ┃ ┣ favicon.ico
 ┃ ┣ index.html
 ┃ ┣ logo512.png
 ┃ ┣ manifest.json
 ┃ ┗ robots.txt
 ┣ src
 ┃ ┣ api
 ┃ ┃ ┗ instance.js
 ┃ ┣ app
 ┃ ┃ ┣ App.js
 ┃ ┃ ┣ rootReducer.js
 ┃ ┃ ┗ store.js
 ┃ ┣ assets
 ┃ ┃ ┣ fonts
 ┃ ┃ ┃ ┗ NotoSansKR-Regular.otf
 ┃ ┃ ┣ icons
 ┃ ┃ ┃ ┗ example.svg
 ┃ ┃ ┗ images
 ┃ ┃ ┃ ┗ logo.png
 ┃ ┣ layout
 ┃ ┃ ┣ Footer.js
 ┃ ┃ ┣ Header.js
 ┃ ┃ ┣ Layout.js
 ┃ ┃ ┣ footer.module.scss
 ┃ ┃ ┣ header.module.scss
 ┃ ┃ ┗ layout.module.scss
 ┃ ┣ pages
 ┃ ┃ ┣ detail
 ┃ ┃ ┃ ┣ detail.js
 ┃ ┃ ┃ ┗ detail.module.scss
 ┃ ┃ ┣ home
 ┃ ┃ ┃ ┣ Components
 ┃ ┃ ┃ ┃ ┣ Movies.js
 ┃ ┃ ┃ ┃ ┗ movies.module.scss
 ┃ ┃ ┃ ┣ home.js
 ┃ ┃ ┃ ┗ home.module.scss
 ┃ ┃ ┣ login
 ┃ ┃ ┃ ┗ login.js
    ... 생략 ...
 ┃ ┃ ┗ page404.js
 ┃ ┣ slices
 ┃ ┃ ┣ loginSlice.js
 ┃ ┃ ┣ menuSlice.js
 ┃ ┃ ┗ modalSlice.js
 ┃ ┣ style
 ┃ ┃ ┣ custom.scss
 ┃ ┃ ┗ index.scss
 ┃ ┣ utils
 ┃ ┃ ┗ common.js
 ┃ ┗ index.js
 ┣ .env.local
 ┣ .gitignore
 ┣ .prettierrc
 ┣ README.md
 ┣ jsconfig.json
 ┣ package-lock.json
 ┗ package.json
```
