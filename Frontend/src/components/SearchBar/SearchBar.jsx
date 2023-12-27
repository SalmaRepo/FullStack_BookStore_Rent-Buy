import { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/context";
import { Link, useNavigate } from "react-router-dom";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";
import Base_URL from "../../../config/urlBase";

function SearchBar() {
  const { search, setSearch, setBookId, bookId } = useContext(MyContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;

    fetch(`${Base_URL}/api/search/book?name=${searchInput}`, {
      /* method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchInput), */
    })
      .then((res) => res.json())
      .then((result) => {
        setSearch(result.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(search);

  return (
    <div>
      <form className="searchbar" action="">
        <FaSearch className="icon" />
        <input
          className="search-books"
          placeholder="Search Books"
          type="text"
          name="search"
          onInput={handleSearch}

        />
      </form>
      {search?.length>0&&<div className="searchResult">
        {search ? search.map((result) => {
                return (
                  <div key={result._id}>
                    <button className="searchResultButton"
                      onClick={() => {
                        console.log(result._id);
                        setBookId(result._id);
                        setSearch(null);
                      }}>
                      <Link to={`/books/${result._id}`} state={result}>
                        {result.title}
                      </Link>
                    </button>
                  </div>
                );
              })
            : "no book found"
          }
      </div>}
    </div>
  );
}

export default SearchBar;
