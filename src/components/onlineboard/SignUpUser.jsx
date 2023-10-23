import React, { useState } from "react";
import { SignUpApi } from "./api/SignUpApiService";
import { useNavigate } from "react-router-dom";

const SignUpUser=()=> {
  const navigate = useNavigate();
  const [userNameError, setUserNameError] = useState("");
  const [userpasswordError, setUserpasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [authResponseError, setAuthResponseError] = useState("");

  const re0 = /^[a-zA-Z0-9]+$/;
  const re1 = /^[a-zA-Z가-힣0-9!@#$%^&*]+$/;
  const re2 = /^[a-zA-Z가-힣]+$/;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name_first: "",
    name_last: "",
    nickname: "",
    email: "",
  });

  const validateUserName = (username) => {
    if (
      (username != "" && username.length < 6) ||
      (username != "" && username.length > 20)
    ) {
      setUserNameError("아이디는 6자 이상 20자 미만입니다.");
    } else if (!re0.test(username) && username != "") {
      setUserNameError("아이디는 알파벳과 숫자만 허용됩니다.");
    } else {
      setUserNameError("");
    }
  };
  const validatePassWord = (password) => {
    const hasSpecialChar = "";
    if (
      (password != "" && password.length < 8) ||
      (password != "" && password.length > 20)
    ) {
      setUserpasswordError("비밀번호는 8자 이상 20자 미만입니다.");
    } else if (hasSpecialChar == /[!@#$%^&*]/.test(password)) {
      setUserpasswordError(
        "비밀번호는 !, @, #, $, %, ^, &, *중 하나 이상을 포함해야만 됩니다."
      );
    } else if (!re1.test(password) && password != "") {
      setUserpasswordError(
        "비밀번호는 알파벳과 숫자, !, @, #, $, %, ^, &, *만 허용됩니다."
      );
    } else {
      setUserpasswordError("");
    }
  };
  const validateName = (name, isFirstName) => {
    const hasSpecialChar = "";
    let nameString = "";
    if (isFirstName) {
      nameString = "퍼스트 ";
    } else {
      nameString = "라스트 ";
    }
    if ((name != "" && name.length < 1) || (name != "" && name.length > 20)) {
      setNameError(isFirstName + "네임은 1자 이상, 20자 이하입니다.");
    } else if (!re2.test(name) && name != "") {
      setNameError(isFirstName + "네임은 알파벳과 한글만 허용됩니다.");
    } else {
      setNameError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    switch (name) {
      case "username":
        validateUserName(value);
        break;
      case "password":
        validatePassWord(value);
        break;
      case "name_first":
        validateName(value, true);
        break;
      case "name_last":
        validateName(value, false);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userNameError === "" && userpasswordError === "" && nameError == "") {
      SignUpApi(formData)
        .then((response) => {
          console.log(response.data);
          if (response.status == 201) {
            navigate(`/`);
          }
        })
        .catch((e) => {
          if (e.response.status === 409) {
            setAuthResponseError("이미 존재하는 아이디입니다");
          }
          console.log(e);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>아이디</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      {authResponseError && (
        <div className="errorMessage">{authResponseError}</div>
      )}
      {userNameError ? (
        <div className="errorMessage">{userNameError}</div>
      ) : (
        <div style={{ height: "24px", width: "100px" }}></div>
      )}
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {userpasswordError ? (
        <div className="errorMessage">{userpasswordError}</div>
      ) : (
        <div style={{ height: "24px", width: "100px" }}></div>
      )}
      <div>
        <label>퍼스트네임</label>
        <input
          type="text"
          name="name_first"
          value={formData.name_first}
          onChange={handleChange}
        />
      </div>
      {nameError ? (
        <div className="errorMessage">{nameError}</div>
      ) : (
        <div style={{ height: "24px", width: "100px" }}></div>
      )}
      <div>
        <label>라스트네임</label>
        <input
          type="text"
          name="name_last"
          value={formData.name_last}
          onChange={handleChange}
        />
      </div>
      {nameError ? (
        <div className="errorMessage">{nameError}</div>
      ) : (
        <div style={{ height: "24px", width: "100px" }}></div>
      )}
      <div>
        <label>닉네임</label>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUpUser;
