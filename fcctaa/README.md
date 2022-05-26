<!--

vue 개발환경 세팅 프로세스 (fcctaa 프로젝트)

작성자 : 김우현
작성일 : 2022.05.04
수정일 : 2022.05.17


1. node.js를 설치한다.
  -> https://nodejs.org/ko/download/ 로 가서 16.14.2 버전을 선택하여 설치한다. (윈도우 기준)

2. vscode를 설치한다.
  -> https://code.visualstudio.com/download 로 가서 최신 버전으로 설치한다. (윈도우 기준)
       (현재 작성자 vscode 버전은 1.67.1이다.)

3. vue 압축파일(vue_2022_0504.zip) 을 c:\의 아무 폴더(ex: c:\app\vue)에 압축을 푼다.

4. cmd 를 입력해서 터미널 창을 하나 연다.

5. vue 압축파일을 푼 디렉토리로 가서(ex: c:\app\vue) npm install 를 입력한다.
  (npm install 을 입력하면 vue, vuex 등이 설치됨)

6. 같은 디렉토리에서 npm install -g @vue/cli@4.5.0 를 입력한다.

7. vscode를 실행해서 좌측 Extension 메뉴로 가서 Prettier - Code formatter 와 ESLint 를 설치한다.

8. 프로젝트 루트폴더(ex: c:\app\vue)에 .prettierrc 파일을 신규로 생성하고 (참고1)과 같이 내용을 추가한다.

9. vscode > 좌측하단의 톱니바퀴모양의 설정버튼 클릭 > settings > 마우스 스크롤을 약간 아래로 내려서
  Edit in settings.json 을 클릭 > (참고2)의 내용을 추가해준다.

10. 이로써 설정은 끝났고 잘 되는지 아래와 같이 확인해본다.
  -> vue 압축파일을 푼 디렉토리(ex: c:\app\vue) 에서 npm run serve를 입력하면 vue 서버가 기동된다.

11. 크롬이나 익스플로러를 실행해서 url입력창에 localhost:8080 을 입력해서  Welcome to Your Vue.js App
  메시지와 뷰 아이콘이 뜨면 정상적으로 vue 개발환경이 세팅된 것이다.

12. 기타 관련 문의사항은 김우현 차장에게 문의할 것.



(참고1)
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "endOfLine": "auto"
}


(참고2)
{
  ~ (기존에 있는 설정들)
  "eslint.nodeEnv": "",
  "eslint.validate": [
    "javascript",
    // vue에 대해 eslint 활성화
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 저장시 자동 고침
  "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  // 자동정렬기능이 정상작동하려면 아래 두줄이 필수로 있어야 하고
  // 그리고 추가로 package.json 에서 "printWidth": 100 까지 있어야
  // 자동정렬이 기능이 작동하게 된다.
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
 -->
