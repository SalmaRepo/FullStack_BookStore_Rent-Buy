import "./searchbar.css"

function SearchBar() {
  return (
    <div className="searchbar">
      <img className="search-icon" alt="" src="/search.svg" />
      <input
        className="search-books"
        placeholder="Search Books"
        type="text"
      />
    </div>
  );
}

export default SearchBar;