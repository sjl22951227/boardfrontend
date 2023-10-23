import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readPostApi, deletePostApi } from "./api/PostApiService";
import Comments from "./Comments";
import { useAuth } from "./security/AuthContext";
import "./ReadPost.css";

const ReadPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 초기화
  const navigate = useNavigate();
  const authContext = useAuth();

  useEffect(() => {
    readPostApi(id).then((response) => {
      console.log(response.data);
      setPost(response.data);
      setIsLoading(false);
    });
  }, [id]);

  const showUpdateUI = () => {
    navigate(`/post/update/${id}`);
    console.log(id);
  };

  const deleteUI = () => {
    deletePostApi(id)
      .then((response) => {
        navigate(`/`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="read-container">
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <table className="board-table">
            <thead>
              <tr>
                <th className="title-col" colSpan="5">
                  {post.title}
                </th>
              </tr>
              <tr>
                <th className="id-col">{post.author}</th>
                <th className="id-col">{post.views}</th>
                <th></th>
                <th className="date-col" colSpan="2">
                  {post.created_Time}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="read-td" colSpan="5">
                  {post.text}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div>
        {!isLoading && sessionStorage.getItem("username") === post.author ? (
          <div className="btn-post">
            <button onClick={showUpdateUI}>Update</button>
            <button onClick={deleteUI}>Delete</button>
          </div>
        ) : null}
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};
export default ReadPost;
