import searchicon from "../images/search.svg";
import "../styles/header.css";

function Header(){
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
        <button className="right">
          <img src={searchicon} alt="search icon"/>
          <p>Search</p>
        </button>
      </div>
      <div className="sect2">
        <p className="pre">PRE-LOVED. RE-DISCOVERED. RE-WORN.</p>
      </div>
    </div>
  );
}

export default Header;