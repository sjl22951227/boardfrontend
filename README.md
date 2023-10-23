# onlineboard

게시판 프로젝트의 프론트엔드 Repository 입니다.

[백엔드 Repository 링크]https://github.com/sjl22951227/onlineboard

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
  - 개발 기간 : 2023.10.13 - 2023.10.23 - (일부 기능 추가 예정)
  - 주요 기능 : 회원가입 및 로그인, 게시판 게시물 조회 및 클릭시 상세페이지 이동(post CRUD), 댓글 Read, Create, Delete
  - 개발 환경 : MacOs 14.0 Spring 6.0.12, SpringBoot 3.1.4, Java 17.0, mysql 8.0.34
  - 형상 관리 툴 : git
  - 요약 : OnlineBoard라는 이름의 게시판 제작 프로젝트

    
