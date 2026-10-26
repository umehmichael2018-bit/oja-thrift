import Header from "./component/header";
import Banner from "./component/banner";
import Products from "./component/products";
import Page from "./component/page";
import Footer from "./component/footer";
import { useState } from "react";
function App(){
  const [activePage, setActivePage] = useState(1);
  return(
    <div>
      <Header/>
      <Banner/>
      <Products activePage={activePage}/>
      <Page activePage={activePage} setActivePage={setActivePage}/>
      <Footer/>
    </div>
  );
}

export default App;