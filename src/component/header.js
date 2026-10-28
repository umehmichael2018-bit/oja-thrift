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
      {open && <input className="box" autoFocus value = {query} placeholder="e.g XL, vintage tee" onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter"){e.target.blur()}}}/>}
      <div className="sect2">
        <p className="pre">PRE-LOVED. RE-DISCOVERED. RE-WORN.</p>
      </div>
    </div>
  );
}

export default Header;