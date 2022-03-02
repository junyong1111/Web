# Web
## 웹 페이지 만들기

#### 개발환경
* Visual Studio Code
* Visual Studio Code 확장팩 Live Server(실시간으로 웹페이지 상태를 확인 가능)

### 준비
* Web 폴더 생성
    * css 폴더 생성
    * fonts 폴더 생성
    * images 폴더 생성
    * js 폴더 생성
    * index.html 파일 생성


## Header 영역제작

``` html
<body>
    <div class ="wrap">
        <header>
            <a href="#" class="menuOpen en">
                <span class="top" ></span>
                <span class="mid" ></span>
                <span class="bot" ></span>
            </a>
            <div class ="Book en">
                <a href="#">Book now</a>
            </div>
            <ul class="langs en_1">
                <li><a href="#">kor</a></li>
                <li><a href="#">Eng</a></li>
            </ul>
            <ul class="right">
                <li class="tell"> 
                    <p>통합 예약실 1234-5678</p>
                </li>
                <li><h1 class="logo">
                    <a href="#">
                        <img src="images/logo.png" alt="">
                        <img src="images/logo1.png" alt="">
                    </a>
                </h1></li>
            </ul>
        </header>
    </div>
    
</body>
```
* <link rel="stylesheet" href="css/main.css"> 상단 title 태그 밑에 css와 연결을 위한 코드 추가

    
``` css

/* reset (html 작성 시 항상!) */ 
* {margin: 0;padding: 0;} /* 빈틈없이 딱 붙는다 */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, tbody, tfoot, thead, tr, th, td{margin:0;padding:0;}
h1, h2, h3, h4, h5, h6 {font-weight: 700; font-size: inherit;}
a {color: inherit; text-decoration: inherit;} /*부모의 속성을 받아 한 번 클릭 후 밑줄과 색 변함을 방지*/
img {vertical-align: middle;}
a img {border: none;}
li {list-style: none;} /*목록 앞 도트를 삭제*/
address, em, i {font-style: normal;}
a:focus {outline: none}
button:focus {outline: none}


/* layout */
body{font-family:'Noto Sans KR', sans-serif; background: #ddd; font-size: 14px; color:#000; line-height:1.4;}
.wrap {width: 100%; margin: 0 auto; overflow: hidden;}

.en {font-family: 'Unna', serif;}
.en_1{font-family: 'Maven Pro', sans-serif;}


/* header */
header {width: 100%;  padding: 0 40px;box-sizing: border-box; height: 100px; line-height: 100px;
    color: #fff;z-index: 100; position: fixed; top:0; transition: all 0.5s;} 
    
header .menuOpen{display: inline-block; position: absolute; top: 50%; transform: translateY(-50%);
width: 40px;height: 16px; line-height: 100px; }
header .menuOpen span {display: block; width: 100%; height: 1px; background: #fff;
position: absolute; top: 0; left :0;}
header .menuOpen span.mid {top:50%;}
header .menuOpen span.bot {top:100%;}

header .Book {display: inline-block; float: left; margin-left: 70px; height: 100%; 
    font-size: 25px; }
/* float:left;  아래 요소들이 옆으로 붙음*/
header .langs {float:left; margin-left: 220px; overflow: hidden; width: 150px; } 
header .langs li {float: left; width: 50%;} /*자식 요소한테 float를 줄 경우 부모 요소의 overflow:hidden 으로 감싸준다*/
header .langs li:nth-child(1) {font-weight: bold;}
header .langs li:nth-child(2) {color: #ddd;}

header .langs li a {display: block; padding: 0 30px; box-sizing: border-box; 
    text-transform: uppercase;} 

header .right {float:right;}
header .right li {float: left; margin-right:  55px;}
header .right li:nth-child(2) {margin-right: 0px;}
header .right li p{letter-spacing: 1px;}
header .right li .logo {width: 150px;height: 100px;}
header .right li .logo a {display: block; width: 100%; height: 100%; position:relative;}
header .right li .logo a img {position: absolute; left: 0; top: 50%; transform: translateY(-50%); 
width: 100%;}
header .right li .logo a img:nth-child(2) {opacity: 0;}

```