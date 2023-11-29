import React from 'react'
import Books from '../Books/Books'
import NavBar from '../NavBar/NavBar'

function Home() {
  return (
    <div style={{postiton:"relative",zIndex:"0"}}>
        <NavBar/>
        <Books/>
    </div>
  )
}

export default Home