import { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/products-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/list-products/${page}`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/list-products/${page}`);
      setProducts([...products, ...data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const arr = [...products];
  const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));
  /*
  Here's a breakdown of what the code is doing:

The code starts by defining a constant variable called "sortedBySold".
"arr" is an array of objects that is being sorted. The "?" is called the "optional chaining operator" and is used to check if "arr" exists before attempting to access its "sort" method. If "arr" is undefined or null, the code will exit without attempting to sort.
The "sort" method is used to sort the elements of the array in place. It takes a comparison function as an argument, which determines the order of the sorted elements.
The comparison function takes two parameters, "a" and "b", which represent two elements being compared. The function returns a positive number if "a" should come after "b" in the sorted array, a negative number if "a" should come before "b", and 0 if they are equal.
In this case, the comparison function is using a ternary operator to check if the "sold" property of "a" is less than the "sold" property of "b". If it is, the function returns 1, indicating that "a" should come after "b". Otherwise, the function returns -1, indicating that "a" should come before "b".
The end result is that the "sortedBySold" variable contains a sorted version of the "arr" array, with the objects sorted in descending order based on their "sold" property.
  */ 

  return (
    <div>
      <Jumbotron title="Hello World" sutTitle="Welcome to React E-commerce" />

      <div className="row">
        <div className="col-md-6">
          <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
            New Arrivals
          </h2>
          <div className="row">
            {products?.map((p) => (
              <div className="col-md-6" key={p._id}>
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
            Best Sellers
          </h2>
          <div className="row">
            {sortedBySold?.map((p) => (
              <div className="col-md-6" key={p._id}>
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container text-center p-5">
        {products && products.length < total && (
          <button
            className="btn btn-warning btn-lg col-md-6"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;