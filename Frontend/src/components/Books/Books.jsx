import { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/context";
import { Link } from "react-router-dom";
import "./books.css";
function Books() {
  const { books, setBooks, setBookId } = useContext(MyContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/books/allBooks")
      .then((res) => res.json())
      .then((result) => {
        console.log("hello", result);
        setBooks(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(books);
  return (
    <div className="booksDisp">
      {books.map((book) => {
        console.log(book);
        return (
          <div className="book" key={book._id}>
            <img
              className="bookImg"
              src={book?.formats && book.formats["image/jpeg"]}
              alt={book.title}
            />
            <div className="bookcard">
              <h4>{book.title}</h4>
              <h4>Authors</h4>
              {book.authors.map((author) => (
                <li key={author.id}>{author.name}</li>
              ))}
              <h4>Genre</h4>
              <p>
                {book.bookshelves[0] || book.subjects[book.subjects.length - 2]}
              </p>
            </div>

            <button
              onClick={() => {
                setBookId(book._id);
              }}>
              <Link to={`/books/${book._id}`} state={book}>
                Details
              </Link>
            </button>
            {/*  <button onClick={
                ()=>{
                  setBookId(book._id)

                }
              }><Link to={`/books/${book._id}`} state={book}>
           Rent
            </Link></button> */}
          </div>
        );
      })}
    </div>
  );
}
export default Books;
