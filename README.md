# WEB
<details>
<summary> HTML </summary>
<div markdown="1">   

<details>
<summary>  </summary>
<div markdown="1">   

</div>
</details>



</div>
</details>

<details>
<summary> CSS </summary>
<div markdown="1">   

</div>
</details>

<details>
<summary> Javascript </summary>
<div markdown="1">   

</div>
</details>

<details>
<summary> React </summary>
<div markdown="1">   

<details>
<summary> OT-리액트 </summary>
<div markdown="1">  

### React  
모바일 App처럼 새로고침없이 스무스하게 웹앱을 만들어줌 대표적으로 instagram

- 장점:  
    - 앱처럼 만들었기 때문에 모바일앱으로 발행이 쉬움
    - 앱처럼 뛰어난 UX
    - 일반적인 웹사이트보다 비즈니스적 강점을 가지고 있다.
- 단점:
    - 문법이 조금 어렵다

### 선수지식  
- Javascript 
- html
- css
</div>
</details>

<details>
<summary> 1강 설치 및 셋팅 </summary>
<div markdown="1">   

1. Node.js를 설치(Mac)
```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```shell
brew update
brew install node
node -v 
npm -v
brew install yarn --ignore-dependencies
yarn -v
```

2. 폴더 생성 후 필요한 파일들을 전부 설치해주는 npx 명령어 사용 -> node js를 설치하면 사용가능핟. 
```shell
npx create-react-app "Project_name"
```
3. 만들어 놓은 프로젝트로 이동 후 미리보기 띄우기 
(크롬 설치 필수)
```shell
npm start 
```
4. 추가 폴더 정보
- node_modules :라이브러리 저장소
- public : static 파일들 보관함
- src : 소스코드 보관함 (실질적으로 여기파일들로 코딩함)
- package.json : 설치한 라이브러리 목록

</div>
</details>


<details>
<summary>2강 JSX 사용법  </summary>
<div markdown="1">   

리액트에서는 HTML 대신에 JSX를 사용하여야 한다.

1. 블로그 navbar만들기
```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}
export default App;

```
### App.css파일에서 아래코드를 삽입

```javascript
body {
  font-family: 
  'nanumsquare';
}

.black-nav{
  background: black;
  width: 100%;
  display: flex;
  color: white;
  padding: 20px;
  font-weight: 600;
  font-size: 20px;
}
```

2. 데이터 바운딩 

서버에서 받은 데이터 -> 자바스크립트 -> HTML로 바꾸는 데이터 바운딩을 
리액트에서는 쉽게 할 수 있다

### 바꾸고자 하는 곳에 
```javascript
{ "변수명,함수 등" }
```
### 이미지 넣는법
```javascript
//원하는 이미지를 import 
import logo from './logo.svg';

<img src={ logo } />
// import한 이미지를 {}안에 삽입
```

3. JSX에서 style 속성 삽입

style속성은 {} 안에 오브젝트 형식으로 넣어줘야 함

```javascript
<div style={{color : 'blue', fontSize : '30px'}} >
</div>
```








</div>
</details>



</div>
</details>

<details>
<summary> Typescript </summary>
<div markdown="1">   

</div>
</details>



<!-- <details>
<summary>  </summary>
<div markdown="1">   

</div>
</details> -->