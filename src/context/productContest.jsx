import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductContext = React.createContext();

function AddProductProvide(props) {
  const [searchProducts, setSearchProducts] = useState("");
  const navigate = useNavigate();

  function navgateProduct(searchProducts) {
    navigate(`/products/search/${searchProducts}`);
  }

  return (
    <AddProductContext.Provider
      value={{ searchProducts, setSearchProducts, navgateProduct }}
    >
      {props.children}
    </AddProductContext.Provider>
  );
}
const useAddProduct = () => {
  return React.useContext(AddProductContext);
};
export { AddProductProvide, useAddProduct };
