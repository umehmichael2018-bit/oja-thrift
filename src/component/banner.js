import dot from "../images/dot.svg";
import drop from "../images/drop.svg";
import "../styles/banner.css";

function Banner(){
  return(
    <div className="banner-main">
      <div className="site">
        <p className="pl">THE STORE  /  COLLECTIONS  /  ALL CLOTHING</p>
        <div className="info">
          <img src={dot} alt="dot"/>
          <p className="hand">HANDPICKED IN LAGOS</p>
        </div>
      </div>
      <div className="productyap">
        <div className="product">
          <p className="all">ALL</p>
          <p className="cloth">CLOTHING</p>
        </div>
        <p className="browse">Browsing The Main Catalogue</p>
      </div>
      <div className="yap">
        <div className="yap1">
          <p>Pre-loved, hand-selected streetwear.</p>
          <p>Quality garments built to last.</p>
        </div>
        <div className="yap2">
          <p>Explore every unique piece live in store.</p>
          <p>Find your next favorite fit.</p>
        </div>
      </div>
      <div className="check">
        <button className="collections">
          Browse Collections <img src={drop} alt="drop"/>
        </button>
        <p className="stuff">12 finds  ·  All clothing</p>
      </div>
    </div>
  );
}

export default Banner;