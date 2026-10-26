import ig from "../images/ig.svg";
import mes from "../images/wicon.svg";
import locat from "../images/map.svg";
import "../styles/footer.css";

function Footer(){
  return(
    <div className="footer-main">
      <div className="footer-head">
        <div className="duo">
          <p className="foja">OJA</p>
          <div className="locdiv">
            <p className="vint">VINTAGE</p>
            <p className="loc">LAGOS, NIGERIA</p>
          </div>
        </div>
        <div className="footer-yap">
          <p className="footer-yap1">Good clothes deserve another story.</p>
          <p className="footer-yap2">Handpicked vintage for your everyday rotation</p>
        </div>
      </div>
      <div className="socials">
        <p className="ig"><img src={ig} alt="ig icon"/>INSTAGRAM</p>
        <p className="ojav">@ojavintage</p>
      </div>
      <div className="contact">
        <p className="wat"><img src={mes} alt="message"/>WHATSAPP</p>
        <p className="was-num">+2347018465107</p>
      </div>
      <div className="location">
        <p className="map"><img src={locat} alt="map pin"/>BASED IN</p>
        <p className="lag">Lagos, Nigeria</p>
        <hr/>
      </div>
      <div className="wese">
        <p className="we">© 2026 Oja Vintage. Wear it your way.</p>
        <p className="se">See something you love? Send us a message on WhatsApp.</p>
      </div>
    </div>
  );
}

export default Footer;