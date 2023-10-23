import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  addCommentApi,
  deleteCommentsApi,
  readCommentsApi,
} from "./api/CommentApiService";
import { useAuth } from "./security/AuthContext";
import "./PostBoard.css";
import moment from "moment";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [reloadComments, setReloadComments] = useState(false);
  const commentsPerPage = 20;
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setReloadComments(false);
    readCommentsApi(id).then((response) => {
      setComments(response.data);
      console.log(comments[0]);
    });
  }, [id, reloadComments]);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = Array.isArray(comments)
    ? comments.slice(indexOfFirstComment, indexOfLastComment)
    : [];

  console.log(currentComments);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
  
  const handleKeyPress = (e) => {
    if (e.key === `Enter`) {
      addComment();
    }
  };

  const handleCommentDeleteClick = (id) => {
    deleteCommentsApi(id)
      .then((response) => {
        setReloadComments(true);
      })
      .catch((e) => console.log(e));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
    pageNumbers.push(i);
  }
  const addComment = () => {
    console.log("addComment");
    let author;
    if (!authContext.isAuthenticated) {
      author = "guest";
    } else {
      author = sessionStorage.getItem("username");
    }
    const commentData = {
      user: author,
      text: commentText,
    };
    addCommentApi(id, commentData)
      .then((response) => {
        setComments([...comments, response.data]);
        setCommentText("");
      })
      .catch((e) => console.log(e));
  };
  const formatDate = () => {
    let createdDate = comments.created_Time;
    const date = moment(createdDate).format(`YYYY-MM-DD`);
    return date;
  };
  return (
    <div>
      <table className="board-table">
        <thead>
          <tr>
            <th className="id-col">작성자</th>
            <th className="title-col">댓글</th>
            <th className="id-col">작성시간</th>
            <th className="id-col">닫기버튼</th>
          </tr>
        </thead>
        <tbody>
          {currentComments.map((comment, index) => (
            <tr className="comments-board" key={index}>
              <td>{comment.user}</td>
              <td>{comment.text}</td>
              <td>{formatDate()}</td>
              <td>
                {comment.user === sessionStorage.getItem("username") && (
                  <button
                    key={comment.id}
                    onClick={() => handleCommentDeleteClick(comment.id)}
                  >
                    닫기
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="comment-box">
        <input
          type="text"
          placeholder="commentText"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="comment-btn btn-success m-5" onClick={addComment}>
          comment
        </button>
      </div>
      <div></div>
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => handlePageClick(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Comments;
