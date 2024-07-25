# 배포 주소

https://funny-crisp-ba874c.netlify.app/

# Sass

Sass(Syntactically Awesome StyleSheets)는 두가지 의미를 지니고 있다.

- css의 단점을 메워 더 빠르고 효율적으로 스타일을 작성할 수 있는 구문
- css 전처리기(preprocessor)

=> Sass는 css 코드를 효율적으로 작성하기 위해(간결하고 빠르게 코드를 작성할 수 있다.) 사용하는 프로그래밍 언어이다.

- css를 사용할 때의 불편함을 해소해주는 css 확장 언어이다.
- Sass 전처리기는 Sass 구문 뿐만 아니라 SCSS 구문 또한 css로 변환할 수 있다. (여기서 저는 좀 더 인기가 있는 SCSS 구문을 사용하겠습니다.)
- SCSS 구문은 Sass 언어의 하위 개념이다.

- Sass 구문을 기반으로 작성된 코드는 Sass 전처리기와 컴파일러의 도움을 받아 css 파일보 빌드(build)된다. 따라서 여기서의 환경(PC)에는 Sass를 css로 빌드할 수 있는 도구가 준비되어 있어야 한다. 방법은 두가지이다.
  - visual studio code 확장 기능: Live Sass Compiler
    -> Sass 또는 SCSS 구문으로 작성된 코드를 실시간으로 모니터링하여 즉각적으로 css 파일로 빌드 해준다.
  - 명령행 인터페이스 : (node.js 가 먼저 설치 되어 있어야 한다.)
  ```bash
  1. npm install -g sass
  2. sass --version
  3. style 폴더 안에 main.scss 파일을 만든다.
  4. sass style/main.scss:style/main.css
  5. sass --watch style/main.scss:style/main.css (live 실행)
  6. 터미널에서 ctrl + c (live 실행 중단)
  7. sass --watch --style compressed assets/css/style.scss:assets/css/style.css (최종코드)(css파일 압축)
  ```

<hr>

출처 :

<br/>
https://www.youtube.com/watch?v=YqmJWF4o700

<br/>
https://www.youtube.com/watch?v=qdah3ve0m7Q

<br/>
https://www.youtube.com/watch?v=k0s0iqfZJa4&t=18s
