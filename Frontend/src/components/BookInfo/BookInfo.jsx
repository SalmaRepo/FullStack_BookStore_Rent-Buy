import React, { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/context";

const BookInfo = () => {
  const { bookId, requestedBook, setRequestedBook } = useContext(MyContext);
  console.log(bookId);

  useEffect(() => {
    fetch(`http://localhost:4000/api/books/getBookById/${bookId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setRequestedBook(result.data);
      })
      .catch((err) => console.log(err));
    console.log(bookId);
  }, [bookId]);

  console.log(requestedBook);
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <img src={requestedBook?.formats["image/jpeg"]} />
      <div>
        <h5>{requestedBook?.title}</h5>
        <h3>Authors</h3>
        {requestedBook?.authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
        <h3>Genre</h3>
        <p>
          {requestedBook?.bookshelves[0] ||
            requestedBook?.subjects[requestedBook?.subjects.length - 2]}
        </p>
      </div>

      <div>
        <button>Like</button>
        <button>Review</button>
        <div>
          <button>Buy</button>
          <button>Rent</button>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
