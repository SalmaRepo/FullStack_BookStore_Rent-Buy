import { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/context";
import { Link } from "react-router-dom";
import "./books.css";
import Footer from "../Footer/Footer";
import Base_URL from "../../../config/urlBase";
function Books() {
  const { books, setBooks, setBookId } = useContext(MyContext);

  useEffect(() => {
    fetch(`${Base_URL}/api/books/allBooks`)
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
            <div className="bookInt">
            <img
              className="bookImg"
              src={book?.formats && book.formats["image/jpeg"]}
              alt={book.title}
            />
            <div className="bookcard">
              <h4>{book.title}</h4>
              <h4>Authors</h4>
              {book.authors.map((author) => (
                <li key={author.id} className="authorName">{author.name}</li>
              ))}
              <h4>Genre</h4>
              <p>
                {book.bookshelves[0] || book.subjects[book.subjects.length - 2]}
              </p>
              <h2>
          {book?.download_count.toString().substring(0, 3)} Euros
        </h2>
            </div>
            <Link to={`/books/${book._id}`} state={book}>
            <button
              onClick={() => {
                setBookId(book._id);
              }}>
              
                Details
                </button>
              </Link>
              
            </div>
            
          
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
