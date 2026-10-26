import Header from "./component/header";
import Banner from "./component/banner";
import Products from "./component/products";
import Page from "./component/page";
import { productsData } from "./component/productsData";
import Footer from "./component/footer";
import { useState } from "react";

const randomizArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }

function App(){
  const [activePage, setActivePage] = useState(1);
  const [scrambleProducts] = useState(() => randomizArray(productsData));
  const [category, setCategory] = useState("all");
  const catProducts = scrambleProducts.filter((product) => category === "all" || product.category === category);
  return(
    <div>
      <Header/>
      <Banner setCategory={setCategory} category={category} setActivePage={setActivePage}/>
      <Products activePage={activePage} scrambleProducts={scrambleProducts} category={category} catProducts={catProducts}/>
      <Page activePage={activePage} setActivePage={setActivePage} catProducts={catProducts}/>
      <Footer/>
    </div>
  );
}

export default App;