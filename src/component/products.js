import "../styles/products.css";
import message from "../images/wicon.svg";
import arrow from "../images/arrow-up-right.svg";
import ban from "../images/ban.svg";
import { productsData } from "./productsData";

function Products(){
  return(
    <div className="product-grid">
      {productsData.map((product) => (
        <div className="card">
          <img src={product.image} alt="top"/>
          <div className="cloth-info">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <p className="stuff">{product.size}</p>
          <button className={`${product.isSold ? "out-of-stock" : "buy-btn"}`} disabled= {product.isSold}>{product.isSold ? <div><img src={ban} alt="ban"/>Out Of Stock</div> : <div><img src={message} alt="message"/>WhatsApp to buy<img src={arrow} alt="arrow"/></div>}</button>
          <div className={`${product.badge === "SOLD" ? "sold" : "one-of-one"}`}>
            <p>{product.badge}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;