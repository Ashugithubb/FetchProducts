import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Component/Card';
import Pagination from './Component/Pagination';
import './Style/card.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const localData = localStorage.getItem('products');
    if(localData){
      setData(JSON.parse(localData));
      setLoading(false);
    }
    else{
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log(apiUrl)
    //axios.get(apiUrl)
    axios.get("https://dummyjson.com/products?limit=500")
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
        console.log("api called");
        localStorage.setItem('products',JSON.stringify(res.data.products));
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });}

  }, []);

  

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error}</div>;

  const PAGE_SIZE = 10;
  const totalProducts = data.length;
  const noOfPage = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  function handlePageChange() {
    setCurrentPage((prev) => prev);
  }
  function goToNextPage() {
    setCurrentPage((prev) => prev + 1);
  }
  function goToPrevPage() {
    setCurrentPage((prev) => prev - 1);
  }

  return (
    <>  
      <h1>All Products</h1>
      <div className="card">
        {data.slice(start, end).map((item) => (
          <Card key={item.id}
            image={item.images[0]}
            title={item.title}
            price={item.price}
            rating={item.rating} />

        ))}
      </div>
      <Pagination currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        handlePageChange={handlePageChange}
        noOfPage={noOfPage}
      />

    </>
  );
}

export default App;
