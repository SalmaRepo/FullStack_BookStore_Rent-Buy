import React, { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/context";
import { Link } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, setBookId,bookId } = useContext(MyContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.search.value;

    fetch(`http://localhost:4000/api/search/book?name=${searchInput}`, {
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
      <form action="" onSubmit={handleSearch}>
        <input type="text" name="search" />
        {search.length>=0 ? (
          search.map((result) => {
            return (
              <div key={result._id}>
               
                  <button onClick={() => {
                    setBookId(result._id)
                    setSearch([])
                  }}>
                     <Link to={`/books/${bookId}`}>{result.title}</Link>
                  </button>
                
              </div>
            );
          })
        ) : (
          <p>no books found</p>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
