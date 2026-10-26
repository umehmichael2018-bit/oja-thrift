import prev from "../images/arrow-left.svg";
import next from "../images/arrow-right.svg";
import "../styles/page.css";

function Page({activePage, setActivePage, catProducts}){

  const itemsPerPage = 12;
  const totalPages = Math.ceil(catProducts.length / itemsPerPage);

  const startCount = (activePage - 1) * itemsPerPage + 1;
  const endCount = Math.min(activePage * itemsPerPage, catProducts.length);
  return(
    <div className="page-container">
      <p className="sho">Showing {startCount}-{endCount} of {catProducts.length} finds</p>
      <div className="buttons">
        <button onClick = {() => setActivePage(activePage-1)} disabled= {activePage === 1} className="previous">
          <img src={prev} alt="previoso"/> Previous
        </button>
        <div>
          {activePage === 1 ? 
          <div className="next-nums">
            <button className="active">
              {activePage}
            </button>
            {totalPages >= 2 &&
            <button onClick={() => {setActivePage(2)}} className="next-num1">
              {activePage+1}
            </button>}
            {totalPages >= 3 && 
            <button className="next-num2" onClick={() => {setActivePage(3)}}>
              {activePage + 2}
            </button>}
          </div> : 
          <div className="nums">
            <button className="prev-num" onClick={()=>setActivePage(activePage-1)}>
              {activePage - 1}
            </button>
            <button className="active">
              {activePage}
            </button>
            {totalPages >= (activePage+1) ? <button className="next-num" onClick={()=> setActivePage(activePage+1)}>
            {activePage + 1}
            </button> : null}
          </div>}
        </div>
        <button className="next" onClick = {() => setActivePage(activePage+1)} disabled={activePage===totalPages || totalPages === 0}>
          <img src={next} alt="next"/> Next
        </button>
      </div>
    </div>
  );
}

export default Page;