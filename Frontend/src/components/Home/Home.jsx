import "./home.css";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <img
        className="imagebackground-icon"
        alt=""
        src="/imagebackground@2x.png"
      />
      <div className="boockscontainer">
        <div className="boockscontainer-inner">
          <div className="in-the-enchanting-realm-of-a-b-wrapper">
            <p className="in-the-enchanting">
              In the enchanting realm of a book, words weave spells that
              transport the reader to extraordinary worlds, where imagination
              takes flight, and the magic of storytelling unfolds with every
              turn of the page.
            </p>
          </div>
        </div>
        <div className="ellipse-parent">
          <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
          <h2 className="our-books">Our Books</h2>
        </div>
        <Cart />
      </div>
      <footer className="footer1" />
    </div>
  );
}

export default Home;
