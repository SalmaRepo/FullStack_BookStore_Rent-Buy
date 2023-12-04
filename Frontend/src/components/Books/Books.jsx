import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../contexts/context'
import { Link } from 'react-router-dom'
import './books.css'
function Books() {
  const { books, setBooks,setBookId, bookId  } = useContext(MyContext)

  useEffect(() => {
    fetch("http://localhost:4000/api/books/allBooks")
      .then(res => res.json())
      .then(result => {
        setBooks(result.data)
      }).catch(err => console.log(err))
  }, [])


  return (
    <div className='booksDisp' /* style={{ display: "flex", width: "50%", margin: "0 auto", flexWrap: "wrap",gap:"1rem" }} */>
      {
        books.map(book => {
          return (
            <div className='book' key={book._id}>
              <img className="bookImg" src={book.formats['image/jpeg']} alt={book.title} />
              <h5>{book.title}</h5>
              <h3>Authors</h3>
              {book.authors.map(author => <li key={author.id}>{author.name}</li>)}
              <h3>Genre</h3>
              <p>{book.bookshelves[0] || book.subjects[book.subjects.length - 2]}</p>

              <button onClick={
                ()=>{
                  setBookId(book._id)

                }
              }><Link to={`/books/${book._id}`} state={book}>
             Buy
            </Link></button>
            <button onClick={
                ()=>{
                  setBookId(book._id)

                }
              }><Link to={`/books/${book._id}`} state={book}>
           Rent
            </Link></button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Books