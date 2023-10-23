import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { writePostApi } from "./api/PostApiService";
import { useAuth } from "./security/AuthContext";
import "./WritePost.css";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const authContext = useAuth();

  const handleSubmit = () => {
    const newPost = {
      title,
      author: authContext.username,
      text,
    };

    if (title.length < 1 || text.length < 1) {
      console.log("no write");
      return null;
    }

    writePostApi(newPost)
      .then((response) => {
        console.log("Post written successfully", response.data);
        navigate(`/`);
      })
      .catch((error) => {
        console.log("Error writing post:", error);
      });
  };
  return (
    <div className="write-post-container">
      <h1>Write Post</h1>
      <div>
        <input
          className="write-post-title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="write-post-text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="write-post-submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default WritePost;
