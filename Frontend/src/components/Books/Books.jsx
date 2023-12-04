import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../contexts/context'

function Books() {
  const { books, setBooks } = useContext(MyContext)

  useEffect(() => {
    fetch("http://localhost:4000/api/books/allBooks")
      .then(res => res.json())
      .then(result => {
        setBooks(result.data)
      }).catch(err => console.log(err))
  }, [])


  return (
    <div style={{ display: "flex", width: "50%", margin: "0 auto", flexWrap: "wrap",gap:"1rem" }}>
      {
        books.map(book => {
          return (
            <div key={book._id} style={{ display: "flex", width: "30%",border:"2px solid",alignItems:"center",margin: "0 auto", flexWrap: "wrap", flexDirection: "column" }} >
              <img src={book.formats['image/jpeg']} alt={book.title} />
              <h5>{book.title}</h5>
              <h3>Authors</h3>
              {book.authors.map(author => <li key={author.id}>{author.name}</li>)}
              <h3>Genre</h3>
              <p>{book.bookshelves[0] || book.subjects[book.subjects.length - 2]}</p>

              <button>Buy</button>
              <button>Rent</button>
            </div>
          )
        })
      }
    </div>
  )
}
export default Books