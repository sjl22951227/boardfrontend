import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchWithKeywordApi } from "./api/SearchApiService";
import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCode, setSelectedCode] = useState("제목검색");

  const codeOptions = [
    { code: "제목검색" },
    { code: "작성자검색" },
    { code: "내용검색" },
  ];

  const handleDropBoxChange = (e) => {
    const selected = e.target.value;
    setSelectedCode(selected);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === `Enter`) {
      handleSearchSubmit();
    }
  };
  useEffect(() => {
    if (searchTerm == "") {
      setSearchTerm("");
      return;
    }
  }, [searchTerm]);

  const handleSearchSubmit = () => {
    let type;
    switch (selectedCode) {
      case "제목검색":
        type = "title";
        break;
      case "작성자검색":
        type = "author";
        break;
      case "내용검색":
        type = "text";
        break;
    }
    searchWithKeywordApi(searchTerm, 1, type)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.content.length > 0) {
            navigate(`/post/search/${type}/${searchTerm}/1`);
          } else {
            navigate(`/post/search/notfound`);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="search-container">
      <select
        className="search-select"
        onChange={handleDropBoxChange}
        value={selectedCode}
      >
        {codeOptions.map((opt, index) => (
          <option key={index} value={opt.code}>
            {opt.code}
          </option>
        ))}
      </select>
      <input
        className="search-bar"
        type="text"
        placeholder="검색: "
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
