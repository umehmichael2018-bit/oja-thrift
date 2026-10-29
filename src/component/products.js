import "../styles/products.css";
import message from "../images/wicon.svg";
import arrow from "../images/arrow-up-right.svg";
import ban from "../images/ban.svg";


function Products({activePage,catProducts, category, query}){
  const filtered = catProducts ? catProducts.slice(((activePage-1)*12), (activePage*12)) : [];
  return(
    <div className="product-grid">
      {catProducts && catProducts.length > 0 ? 
      (filtered.map((product) => (
        <div className="card" key={product.id}>
          <img className="image" src={product.image} alt="top"/>
          <div className="cloth-info">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <p className="stuff">{product.size}</p>
          {product.isSold ? 
          <button className="out-of-stock"><div><img src={ban} alt="ban"/>Out Of Stock</div></button> : 
          <a href={`https://wa.me/2347018465107?text=${encodeURIComponent(`Hi OJA I want ${product.name} - ${product.price} is it available?`)}`} target={product.isSold ? undefined : "_blank"} rel={product.isSold ? undefined : "noreferrer"} style={{ color: "inherit", textDecoration: "none"}} className="buy-btn"><div><img src={message} alt="message"/>WhatsApp to buy<img src={arrow} alt="arrow"/></div></a>}
          <div className={`${product.badge === "SOLD" ? "sold" : "one-of-one"}`}>
            <p>{product.badge}</p>
          </div>
        </div>
      ))) : <div className="claus"><p className="noth">{query ? `No matches found for ${query}` : `No ${category} curated yet`}</p></div>}
    
    </div>
  );
}

export default Products;