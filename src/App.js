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
  const query = searchParams.get("search")?.toLowerCase() || "";
  const setCategory = (newCategory) => {
    const currentSearch = searchParams.get("search");
    const newParams = {};
    if (newCategory === "all") {
      searchParams.delete("category");
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
      if (currentSearch) newParams.search = currentSearch;
      newParams.category = newCategory;

      setSearchParams(newParams);
    }
    setActivePage(1);
  };
  const catProducts = scrambleProducts.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesName = product.name?.toLowerCase().includes(query);
    const matchesSize = product.size?.toLowerCase().includes(query);
    const matchesPrice = String(product.price)?.toLowerCase().includes(query);
    const matchescat = product.category?.toLowerCase().includes(query);

    const matchesSearch = !query || matchesName || matchesPrice || matchesSize || matchescat;

    return matchesCategory && matchesSearch;
  })
  return(
    <div>
      <Header/>
      <Banner setCategory={setCategory} category={category} setActivePage={setActivePage} catProducts={catProducts}/>
      <Products activePage={activePage} query={query} scrambleProducts={scrambleProducts} category={category} catProducts={catProducts}/>
      <Page activePage={activePage} setActivePage={setActivePage} catProducts={catProducts}/>
      <Footer/>
    </div>
  );
}

export default App;