import { useState } from "react";
import dot from "../images/dot.svg";
import drop from "../images/drop.svg";
import "../styles/banner.css";

function Banner({category, setCategory, setActivePage, catProducts}){
  const categoryNames = {
    all: "All Clothing",
    tops: "tops and shirts",
    bottoms: "bottoms and trousers",
    outerwear: "outerwear",
    dresses: "dresses and skirts",
    sets: "beautiful sets"
};
  const [open, setOpen] = useState(false);
  const funct = (cat) => {
    setActivePage(1);
    setCategory(cat);
    setOpen(!open);
  }
  const name = categoryNames[category] || "All Clothing";
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
          <p className="all">{category === "all" ? "ALL CLOTHING" : category}</p>
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
        <div className="dropdown" style={{ position: "relative" }}>
          <button className="collections" onClick={()=>setOpen(!open)}>
            Browse Collections <img style={{transform: open ? "rotate(180deg)" : "", transition: "transform 0.2s ease"}} src={drop} alt="drop"/>
          </button>
          <div className="categories" style={{
            zIndex: 10,
            background: "#F5F2EA",
            position: "absolute",
            opacity: open? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            pointerEvents: open? "auto" : "none"
           }}>
            <button className="allcloth" onClick={()=>funct("all")}>All Clothing</button>
            <button className="top" onClick={()=>funct("tops")}>Tops and Shirts</button>
            <button className="bottom" onClick={()=>funct("bottoms")}>Bottoms and Trousers</button>
            <button className="outer" onClick={()=>funct("outerwear")}>Outerwear</button>
            <button className="dress" onClick={()=>funct("dresses")}>Dresses and Skirts</button>
            <button className="set" onClick={()=>funct("sets")}>Beautiful Sets</button>
          </div>
        </div>
        <p className="stuff">{catProducts.length} finds  ·  {name}</p>
      </div>
    </div>
  );
}

export default Banner;