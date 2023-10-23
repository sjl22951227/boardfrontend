import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePostApi, readPostApi } from "./api/PostApiService";
import { useAuth } from "./security/AuthContext";

const UpdatePost=()=> {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const authContext = useAuth();

  useEffect(() => {
    readPostApi(id).then((response) => {
      setTitle(response.data.title);
      setText(response.data.text);
    });
  }, [id]);

  const handleSubmit = () => {
    const updatedPost = {
      title,
      author: authContext.username,
      text,
    };

    updatePostApi(id, updatedPost)
      .then((response) => {
        console.log("Post updated successfully", response.data);
        navigate(`/post/${id}`);
      })
      .catch((error) => {
        console.log("Error updating post:", error);
      });
  };

  return (
    <div>
      <h1>Update Post</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default UpdatePost;
