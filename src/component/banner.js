import { useState } from "react";
import dot from "../images/dot.svg";
import drop from "../images/drop.svg";
import "../styles/banner.css";

function Banner(){
  const [open, setOpen] = useState(false)
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
        <div className="dropdown">
          <button className="collections" onClick={()=>setOpen(!open)}>
            Browse Collections <img src={drop} alt="drop"/>
          </button>
          {open && <div className="categories">
            <button className="top">Tops and Shirts</button>
            <button className="bottom">Bottoms and Trousers</button>
            <button className="outer">Outerwears</button>
            <button className="dress">Dresses and Skirts</button>
            <button className="set">Beautiful Sets</button>
            </div>}
        </div>
        <p className="stuff">12 finds  ·  All clothing</p>
      </div>
    </div>
  );
}

export default Banner;