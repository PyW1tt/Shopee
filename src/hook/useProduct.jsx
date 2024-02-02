import { useState } from "react";
import axios from "axios";

function useProduct() {
  const [loading, setloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [product, setPorduct] = useState([]);
  const [productById, setPorductById] = useState([]);

  async function getProduct(searchProducts, limit) {
    try {
      setloading(true);
      const result = await axios.get(
        `/products/search?q=${searchProducts}&limit=${limit}`
      );
      setPorduct(result.data.products);
      setloading(false);
    } catch (error) {
      setloading(false);
      setIsError(true);
      console.log("Error");
    }
  }

  async function getProductById(param) {
    try {
      setloading(true);
      const result = await axios.get(`/products/${param}`);
      setPorductById(result.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      setIsError(true);
      console.log("Error");
    }
  }

  async function getCategory(param) {
    try {
      setloading(true);
      const result = await axios.get(`/products/category/${param}?limit=0`);
      setPorduct(result.data.products);
      // console.log(result.data.products);
      setloading(false);
    } catch (error) {
      setloading(false);
      setIsError(true);
      console.log("Error");
    }
  }

  return {
    getProduct,
    product,
    loading,
    isError,
    setPorduct,
    getProductById,
    productById,
    setPorductById,
    getCategory,
  };
}

export default useProduct;
