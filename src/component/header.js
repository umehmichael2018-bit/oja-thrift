import searchicon from "../images/search.svg";
import "../styles/header.css";
import { useState } from 'react';

function Header(){
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState ("")
  return(
    <div className="header-main">
      <div className="header-main-sect1">
        <div className="header-main-sect1-left">
          <div className="header-main-sect1-left-hold">
            <p className="oja">OJA</p>
          </div>
          <div className="tog">
            <div className="vin">VINTAGE</div>
            <div className="loca">LAGOS, NIGERIA</div>
          </div>
        </div>
        <button className="right" onClick={() => setOpen(!open)}>
          <img src={searchicon} alt="search icon"/>
          <p>Search</p>
        </button>
      </div>
      {open &&
       <div style={{ position: "relative", display:"flex", alignItems: "center", justifyContent: "center", flex: 1}}>
         <input className="box" autoFocus value = {query} placeholder="e.g XL, vintage tee" onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter"){e.target.blur()}}}/>
         {query && (
        <button onClick={() => setQuery("")} 
        style = {{
          position: "absolute", right:"0.75rem", top: "50%",
          transform: 'translateY(-50%)',
          width: "22px", height: "22px",
          borderRadius: "50%",
          background: "black",
          border: "none",
          display: "flex", alignItems: 'center', justifyContent: "center",

        }}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M1 1 L9 9 M9 1 L1 9" stroke="white" strokeWidth="1.5"/>
          </svg>
        </button>)}
      
       </div>}
      
      <div className="sect2">
        <p className="pre">PRE-LOVED. RE-DISCOVERED. RE-WORN.</p>
      </div>
    </div>
  );
}

export default Header;