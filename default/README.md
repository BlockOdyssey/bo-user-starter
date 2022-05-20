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
├── README.md
├── jsconfig.json
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── api
    │   └── index.js
    ├── app
    │   ├── App.js
    │   ├── rootReducer.js
    │   └── store.js
    ├── assets
    │   ├── icons
    │   │   └── example.svg
    │   └── images
    │       └── logo.png
    ├── components
    │   └── Modal
    │       └── LoginModal.js
    ├── index.js
    ├── layouts
    │   ├── Footer
    │   │   ├── footer.scss
    │   │   └── index.js
    │   ├── Header
    │   │   ├── header.scss
    │   │   └── index.js
    │   ├── index.js
    │   └── layout.scss
    ├── pages
    │   ├── 404
    │   │   ├── index.js
    │   │   └── page404.scss
    │   ├── Detail
    │   │   ├── detail.scss
    │   │   └── index.js
    │   ├── Home
    │   │   ├── components
    │   │   │   └── Movies
    │   │   │       ├── index.js
    │   │   │       └── movies.scss
    │   │   ├── home.scss
    │   │   └── index.js
    │   ├── Login
    │   │   └── index.js
    │   ├── Movie
    │   │   ├── index.js
    │   │   └── movie.scss
    │   └── Profile
    │       └── index.js
    ├── slices
    │   ├── loginSlice.js
    │   ├── menuSlice.js
    │   └── modalSlice.js
    ├── styles
    │   ├── abstracts
    │   │   ├── _mixins.scss
    │   │   └── _variables.scss
    │   ├── base
    │   │   ├── _reset.scss
    │   │   └── _typography.scss
    │   └── main.scss
    └── utils
        ├── common.js
        └── localStorageService.js

```

## NPM Packages

-   [React v17](https://reactjs.org/docs/getting-started.html "react")
    -   [create-react-app](https://create-react-app.dev/docs/getting-started "create-react-app")
-   [react-router-dom v6](https://github.com/ReactTraining/react-router#readme "react-router-dom")
-   [react-hook-form v7](https://www.react-hook-form.com/ "react-hook-form")
    -   [@hookform/resolvers](https://github.com/react-hook-form/resolvers "@hookform/resolvers")
    -   [yup](https://github.com/jquense/yup "yup")
-   redux
    -   [react-redux](https://github.com/reduxjs/react-redux "react-redux")
    -   [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
-   [@fontsource/noto-sans-kr](https://www.npmjs.com/package/@fontsource/noto-sans-kr "@fontsource/noto-sans-kr")
-   [axios](https://github.com/axios/axios "axios")
-   [dayjs](https://www.npmjs.com/package/dayjs "dayjs")
-   [prop-types](https://www.npmjs.com/package/prop-types "prop-types")
-   [react-modal](https://github.com/reactjs/react-modal "react-modal")
-   [react-query](https://react-query.tanstack.com/ "react-query")
-   [sass](https://www.npmjs.com/package/sass "sass")
-   Dev Dependencies
    -   [@redux-devtools/extension](https://github.com/reduxjs/redux-devtools/tree/main/extension#13-use-redux-devtoolsextension-package-from-npm "@redux-devtools/extension")
    -   [dotenv](https://github.com/motdotla/dotenv "dotenv")
    -   [env-cmd](https://github.com/toddbluhm/env-cmd#readme "env-cmd")
    -   ESLint
        -   [eslint](https://github.com/eslint/eslint "eslint")
    -   ESLint Airbnb (+ Peer Dependencies)
        -   [eslint-config-airbnb v19.0.4](https://www.npmjs.com/package/eslint-config-airbnb "eslint-config-airbnb")
            -   [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import "eslint-plugin-import")
            -   [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y "eslint-plugin-jsx-a11y")
            -   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react "eslint-plugin-react")
            -   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks "eslint-plugin-react-hooks")
    -   ESLint + Prettier
        -   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier "eslint-config-prettier")
        -   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier "eslint-plugin-prettier")
    -   [prettier](https://github.com/prettier/prettier "prettier")
    -   Stylelint
        -   [stylelint](https://github.com/stylelint/stylelint "stylelint")
        -   [stylelint-config-prettier-scss](https://www.npmjs.com/package/stylelint-config-prettier-scss "stylelint-config-prettier-scss")
        -   [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss "stylelint-config-standard-scss")
        -   [stylelint-order](https://www.npmjs.com/package/stylelint-order "stylelint-order")
-   Extra Dependencies
    -   [edit-json-file](https://github.com/IonicaBizau/edit-json-file#readme "edit-json-file")
    -   [ncp](https://github.com/AvianFlu/ncp "ncp")
