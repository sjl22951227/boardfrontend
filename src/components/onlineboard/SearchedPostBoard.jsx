import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import "./PostBoard.css";
import { searchWithKeywordApi } from "./api/SearchApiService";
import SearchBar from "./SearchBar";

const SearchedPostBoard=()=> {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [createdDate, setCreatedDate] = useState("");
  const { type, keyword, pageNumber } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  const minPage = Math.max(1, currentPage - 4);
  const maxPage = Math.min(totalPages, currentPage + 4);

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > 9) {
    if (currentPage <= 4) {
      startPage = 1;
      endPage = 9;
    } else if (currentPage >= totalPages - 4) {
      startPage = totalPages - 8;
      endPage = totalPages;
    } else {
      startPage = currentPage - 4;
      endPage = currentPage + 4;
    }
  } else {
    startPage = 1;
    endPage = totalPages;
  }

  useEffect(() => {
    const newPageNumber = pageNumber ? parseInt(pageNumber) : 1;
    setCurrentPage(newPageNumber);
    console.log(newPageNumber);

    console.log("type: " + type);
    searchWithKeywordApi(keyword, newPageNumber, type)
      .then((response) => {
        if (response.data.content.length > 0) {
          console.log(response.data);
          setPosts(response.data.content);
          setTotalPages(response.data.totalPages);
          setCreatedDate(response.data.created_Time);
          console.log(totalPages);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [keyword, pageNumber]);

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => changePage(i)}
        style={{
          fontWeight: currentPage === i ? "bold" : "normal",
          fontSize: currentPage === i ? "1.2em" : "1em",
          width: `40px`,
          textAlign: `center`,
        }}
      >
        {i}
      </button>
    );
  }

  const formatDate = () => {
    const date = moment(createdDate).format(`YYYY-MM-DD`);
    return date;
  };

  const changePage = (page) => {
    setCurrentPage(page);
    if (page == 0) {
      navigate(`/`);
    } else {
      navigate(`/post/search/${type}/${keyword}/${page}`);
    }
  };

  return (
    <div className="board-container">
      <h1 className="padd">Post Board</h1>
      <SearchBar />
      <table className="board-table">
        <thead>
          <tr>
            <th className="title-col">Title</th>
            <th className="id-col">Author</th>
            <th className="id-col">Views</th>
            <th className="date-col">date</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 20).map((post, index) => (
            <tr key={index}>
              <td className={`title-col ${isHovered ? "td-hovered" : ""}`}>
                <Link
                  className="title-link"
                  to={`/post/${post.id}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {post.title}
                  {post.commentsCounter > 0 &&
                    " (" + post.commentsCounter + ")"}
                </Link>
              </td>
              <td className="id-col">{post.author}</td>
              <td className="id-col">{post.views}</td>
              <td className="date-col">{formatDate()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {1 < currentPage - 4 && <span>o o o</span>}
        {pageButtons}
        {totalPages > currentPage + 4 && <span>o o o</span>}
      </div>
    </div>
  );
}
export default SearchedPostBoard;
