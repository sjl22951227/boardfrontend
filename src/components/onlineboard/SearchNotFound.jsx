import "./SearchNotFound.css";

const SearchNotFound = () => {
  return (
    <div>
      <br />
      <div>
        <img
          className="notfound-board"
          src={`${process.env.PUBLIC_URL}/img/magicalphysical_2.gif`}
          alt="hard.gif"
        />
      </div>
      <br />
      검색결과가 없습니다!
    </div>
  );
};

export default SearchNotFound;
