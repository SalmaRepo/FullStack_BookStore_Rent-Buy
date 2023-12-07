import "./home.css";
import Books from "../Books/Books";
import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <img
        className="imagebackground-icon"
        alt=""
        src="/imagebackground@2x.png"
      />
      <div className="boockscontainer">
        <div className="boockscontainer-inner">
          <div className="boockscontainer-inner-box">
            <p className="boockscontainer-inner-box-sentence">
              In the enchanting realm of a book, words weave spells that
              transport the reader to extraordinary worlds, where imagination
              takes flight, and the magic of storytelling unfolds with every
              turn of the page.
            </p>
          </div>
        </div>
        {/* <div className="ellipse-parent">
          <img className="frame-item" alt="" src="/ellipse-1@2x.png" />
          <h2 className="our-books">Our Books</h2>
        </div> */}
      </div>
      <Books />
    </div>
  );
}

export default Home;
