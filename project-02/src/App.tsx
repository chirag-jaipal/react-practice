import { useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState<{ data: { data: any[] } } | null>(null);
  const [load, setLoad] = useState<string | null>(null);

  const getProducts = async () => {
    const url =
      "https://prod-main-api-704464-00tre1p1erm.compute.instacloud-edge.com/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches";
    const options = { method: "GET", headers: { accept: "application/json" } };

    setLoad("Loading...");
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setRes(data);
      setLoad(null);
    } catch (error) {
      console.log(error);
      setLoad(null);
    }
  };

  return (
    <>
      <div>
        <h1>Products</h1>
        <p>{load}</p>
        <p>
          {res?.data?.data.map((product) => (
            <section>
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p>Price: {product.price}</p>
            </section>
          ))}
        </p>
      </div>
      <button onClick={getProducts}>Click to see Products</button>
    </>
  );
}

export default App;
