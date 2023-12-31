# onlineboard

게시판 프로젝트의 프론트엔드 Repository 입니다.

(아래 링크를 클릭하시면 실제 게시판을 사용해보실 수 있습니다.)

게시판을 비활성화 하였습니다.

[백엔드 Repository 링크](https://github.com/sjl22951227/onlineboard)

[유튜브 동영상 링크](https://youtu.be/2TkpZJmKfEU)

# 프로젝트 특징

- React, Spring으로 게시판을 구현. mysql로 DB 관리

- 프론트엔드와 백엔드를 분리하여 개발한 후 Rest API를 구현하였음.

  - 프론트엔드 : vscode에서 작업 후 프론트엔드 Repository에 업로드
  - 백엔드 : intelliJ에서 작업 후 백엔드 Repository에 업로드

- 회원가입 및 로그인, 게시판 글 읽기, 쓰기, 수정, 삭제, 댓글 읽기, 쓰기, 삭제 구현하였음.

- 검색 기능을 추가하여 포스트의 검색을 제목, 작성자, 내용으로 가능하게 하였음.

- 로그인 인증

  - spring security의 JWT 토큰 인증 방식을 사용하였음.
 
- CRUD 구현

  - REST API 방식 사용
  - 검색 기능으로 게시물들을 검색할 수 있음.
  - 게시물을 누구나 읽을 수 있으며, 작성자의 경우에는 게시물 작성, 수정, 삭제까지 가능함.
  - DB에 User, Post, Comment 테이블을 만들고 CRUD 기능을 구현하였음.
 
- 페이징 처리

  - 게시판에서, 백엔드가 post 관련 요청을 받으면 post를 최신순으로 20개, totalpage를 제공함.
  - 게시판 화면에 최대 20개의 post의 기본 정보를 제공하며, 제목 클릭시 게시물 내용과 댓글을 확인 가능.
  - totalpage와 currentpage에 맞춰서 하단에 페이징 정보를 제공함. 버튼을 클릭하면 페이지를 이동할 수 있음.
  - 사용자가 클릭한 페이지에 해당하는 게시물 목록을 서버에 요청함.
  - DB의 목록을 실시간으로 반영함
 
- 개요

  - 프로젝트 명칭 : OnlineBoard
  - 개발 인원 : 1명(이승준)
  - 개발 기간 : 2023.10.13 - 2023.10.23
  - 주요 기능 : 회원가입 및 로그인, 게시판 게시물 조회 및 클릭시 상세페이지 이동(post CRUD), 댓글 Read, Create, Delete
  - 개발 환경 : MacOs 14.0 Spring 6.0.12, SpringBoot 3.1.4, Java 17.0, mysql 8.0.34
  - 형상 관리 툴 : git
  - 요약 : OnlineBoard라는 이름의 게시판 제작 프로젝트

    
  
  메인화면
    
  ![메인화면](https://github.com/sjl22951227/onlineboard/assets/144699632/9ab79437-7fcf-41b1-af3e-223d27e7ab88)

  회원가입
    
  ![회원가입](https://github.com/sjl22951227/onlineboard/assets/144699632/8f602c14-e45c-473f-a378-a0b94aff5011)

  로그인
  
  ![로그인](https://github.com/sjl22951227/onlineboard/assets/144699632/47c67eef-f00f-4fcc-bafe-724e15565a49)

  페이지 처리

  ![페이지처리](https://github.com/sjl22951227/onlineboard/assets/144699632/ff773e49-1047-4a3c-a87f-7268a64f6a80)


  포스트 읽기

  ![포스트읽기](https://github.com/sjl22951227/onlineboard/assets/144699632/6b57b569-166a-412c-bc9e-4329a1a65d3b)


  포스팅

  ![포스팅](https://github.com/sjl22951227/onlineboard/assets/144699632/09c07eb7-322d-41bf-8ba4-03804ff44a44)

  포스팅 수정

  
  <img width="1917" alt="업데이트 포스트" src="https://github.com/sjl22951227/boardfrontend/assets/144699632/f1685f0c-dee0-4849-b58c-91ebfe016a81">


  제목검색

  ![제목검색](https://github.com/sjl22951227/onlineboard/assets/144699632/ce63c9e5-9e12-4c22-811a-4c95f6984278)


  작성자검색

  ![작성자검색](https://github.com/sjl22951227/onlineboard/assets/144699632/11940ca0-405e-4c43-b954-9f0234720fb2)


  내용검색

  ![내용검색](https://github.com/sjl22951227/onlineboard/assets/144699632/8623277a-8e6d-4c8c-8aa0-19a0249bfaa5)


