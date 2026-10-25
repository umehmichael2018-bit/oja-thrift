import "../styles/products.css";
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
          <button className={`${product.isSold ? "out-of-stock" : "buy-btn"}`} disabled= {product.isSold}>{product.isSold ? "Out Of Stock" : "WhatsApp to buy"}</button>
          <div className={`${product.badge === "SOLD" ? "sold" : "one-of-one"}`}>
            <p>{product.badge}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;