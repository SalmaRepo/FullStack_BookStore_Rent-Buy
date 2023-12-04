import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleBook = () => {
    const {state}=useLocation()
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
    <img src={state?.formats["image/jpeg"]} />
    <div>
      <h5>{state?.title}</h5>
      <h3>Authors</h3>
      {state?.authors.map((author) => (
        <li key={author.id}>{author.name}</li>
      ))}
      <h3>Genre</h3>
      <p>
        {state?.bookshelves[0] ||
          state?.subjects[state?.subjects.length - 2]}
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
  )
}

export default SingleBook