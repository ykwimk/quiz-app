# Quiz-App

## 📂 How to run

```
  1. npm install

  2. npm run start
```

<br />

## 📂 File Structure

```
├── components
|      ├── _Common : 공통으로 쓸 수 있는 UI Component
|      |      ├── Header
|      |      ├── Timer
|      |      └── Wrapper
|      ├── Home : 메인 Component
|      ├── Quiz : 퀴즈 Component
|      └── Result : 결과 Component
|
├── hooks
|
├── store
|
├── styles
|
├── types
|
├── App.js
|
├── index.js
|
├── package.json
|
└── README.md
```

<br />

## 📂 Stack

Language

- Typescript

Library

- React

UI-Component

- Material-UI

Communication

- Fetch

State Container

- Context API

Style

- Styled-Components

Utility

- Lodash
- Moment
- Eslint-standard, Prettier

<br />

## 📂 Component Pattern

- Custom Hook 패턴 사용.
- Custom Hook에 많은 제어권을 줘서, Global State와 Local State, 대부분의 로직들을 그 안에서 처리하는 방법.

<br />

## 📂 Comment

> "많은 페이지가 필요하지 않다" 라고 판단하여, 따로 Router를 사용하지 않고 전역 상태에 따라 컴포넌트를 렌더링 하는 방법을 사용했습니다.
