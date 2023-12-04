import React, { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../contexts/context";

function Likes() {
  const { user, bookId, setLike, like } = useContext(MyContext);

  useEffect(() => {
    
  });

  return( 
  <div>

  </div>)
}

export default Likes;
