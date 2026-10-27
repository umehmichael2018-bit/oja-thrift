import Header from "./component/header";
import Banner from "./component/banner";
import Products from "./component/products";
import Page from "./component/page";
import { productsData } from "./component/productsData";
import Footer from "./component/footer";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const randomizArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }

function App(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [activePage, setActivePage] = useState(1);
  const [scrambleProducts] = useState(() => randomizArray(productsData));
  const category = searchParams.get("category") || "all";
  const setCategory = (newCategory) => {
    if (newCategory === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: newCategory});
    }
    setActivePage(1);
  };
  const catProducts = scrambleProducts.filter((product) => category === "all" || product.category === category);
  return(
    <div>
      <Header/>
      <Banner setCategory={setCategory} category={category} setActivePage={setActivePage} catProducts={catProducts}/>
      <Products activePage={activePage} scrambleProducts={scrambleProducts} category={category} catProducts={catProducts}/>
      <Page activePage={activePage} setActivePage={setActivePage} catProducts={catProducts}/>
      <Footer/>
    </div>
  );
}

export default App;