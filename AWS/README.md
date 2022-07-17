<summary> AWS </summary>
<div markdown="1">  

### 클라우드 서비스
물리적 자원 혹은 논리적 자원을 <u> 대여</u>하는 것

### 만약 서버를 하나 구축한다고 가정했을 때 
1. 자신의 집에 장비를 직접 구축
2. 클라우드 서비스에서 자원을 대여받는 것  
- 클라우드 서비스의 장점
1. 장비가 필요없음 따라서 구매나 관리가 필요없음
2. 서버의 확장 또는 축소에 대응하기 좋다.

애플리케이션 구축에 필요한 서비스들을 돈을 주고 대여하는 것 
### 비용절감에 매우 효과적이다.

<u>시작 전 계정 생성 및 계좌 등록 진행</u>

<details>
<summary> 1. EC2 </summary>
<div markdown="1">

Elastic Compute Cloud의 약자이며
<u>물리적인 자원</u>을 대여해주는 것
### 특징 
- 원하는 만큼 CPU ,디스크 등 자원을 선택하여 대여할 수 있음
- 여러가지 OS 선택이 가능하다.

### EC2 요금

- 온디맨드 : 쓰는만큼 돈을 내는 것
운영체제와 지역에 따라 금액이 달라지니 확인 필
- 인터넷에서 Amazon EC2로 데이터 전송 시 무료
- Amazon EC2에서 인터넷으로 데이터 전송 시 1GB/월 무료 이후 참고
- 저장공간 , 고정IP등 추가적인 요금 확인

### EC2의 자원 생성

1. AWS 웹 브라우저 접속 후 <u>아시아 태평양(서울)로 지역설정</u> 
2. 서비스에서 EC2를 찾은 후 인스턴스 탭에서 인스턴스 시작 클릭
- Quick start -> Amazon Linux(OS)로 선택
- 키 페어 설정 저장 된 파일을 잘 보관해야 함
- 나머지 기본 값으로 진행 

### EC2의 어플 배포

Node.js 어플

1. 생성한 인스턴스 우측 하단에  <u> Iv4 퍼블릭 IP주소</u>를 복사
2. 터미널 실행
- 다운로드 받은 keypair가 있는 폴더로 이동
```
chmod 400 testKey.pem
```
- 위 명령어로 400권한으로 조정
```
ssh -i testKey.pem ec2-user@13.124.89.173
```
- ssh -i 키페어파일 ec2-user@IV4 퍼블릭 IP
- 이후 등록 확인 메시지 yes 입력

3. NVM(Node Version Manager).sh 설치

[Github_link]('https://github.com/nvm-sh/nvm/blob/master/README.md')
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
- ssh 터미널 창에서 아래 명령어로 설치

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
- 환경변수 설정

```
nvm install --lts
```
- --lts (안정적인 버전 사용)을 사용하여 노드 다운로드

```
nvm use --lts
```
- 위 명령어로 --lts 버전으로 스위칭

4. App 폴더 생성
```
mkdir App
cd App
```

5. Express 패키지 설치

```
npm i -S express
```

6. Node.js 앱 생성
 
```
vi index.js
```
- vi 편집기를 이용하여 다음 코드 작성

```Javascript
const express = require('express')
const app = express()

app.get('', async (req, res) => {
    res.send("Hello World\n")
})

app.listen(3000, () =>{
    console.log("App is listening 3000 port")
})
```
- esc -> :wq로 저장 후 닫기

```
node index.js 
```
- index.js 파일 실행 후 확인

7. 동일 인스턴스 내 Get 요청 보내기

- 위 2번 과정 중 ssh명령어를 이용하여 추가로 동일한 인스턴스 접근 (터미널 2개)

```
curl http://localhost:3000
```
- 위 명령어로 인스턴스 내 로컬호스트 get요청 후 Hello World 결과 확인

8. 외부에서 Get 요청

-  AWS 인스터스 화면에서 
    - 인스턴스 설명 -> 자신의 보안그룹 선택
- 인바운드 규칙 편집
    - 규칙 추가
    - 3000포트 추가
    - 0.0.0.0/0
    - 설명 : node.js 
    - 규칙 저장
### 전세계에 3000포트 개방

- 자신의 퍼블릭 IP 13.124.89.173:3000으로 확인

### EC2 자원 삭제

1. keypair.pem파일 삭제
2. 아마존 콘솔 -> 인스턴스 종료
3. 추가적으로 만든 보안그룹이 있다면 삭제
- 인스턴스가 종료된 이후에 삭제가 가능
4. EC2 대시보드  -> 삭제 확인
- 바로 삭제되지 않고 어느정도 시간이 소요된 후 삭제가 될 수있다.

</div>
</details>

### -----------------------EC2 

</div>
</details> 

### -----------------------AWS 