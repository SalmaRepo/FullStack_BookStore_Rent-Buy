import React, { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/context";

function SearchBar() {
  const { search, setSearch } = useContext(MyContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.search.value;
  }

  useEffect(() => {
    

      fetch("http://localhost:4000/api/search/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchInput),
      })
        .then((res) => res.json())
        .then((result) => setSearch(result))
        .catch((err) => console.log(err));
    
  }, []);

  return (
    <div>
      <form action="" onSubmit={handleSearch}>
        <input type="text" name="search" />
        {/* {search?search.map=>(result=>{

        }):<p<} */}
      </form>
    </div>
  );
}

export default SearchBar;
