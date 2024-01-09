import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import Card from "../Cards/card";

const Products = () => {
  const [values, setValues] = useState({ name: "", cost: "", description: "" });
  const [listProducts, setListProducts] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    axios
      .post("http://localhost:3001/register", {
        name: values.name,
        cost: values.cost,
        description: values.description,
      })
      .then((response) => {
        if (response.data.status === "ok") {
          getList();
          setValues({ name: "", cost: "", description: "" });
        }
      });
  };

  const getList = () => {
    axios.get("http://localhost:3001/getCards").then((response) => {
      setListProducts(response.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="container-products">
        <div className="register-container">
          <h2 className="register-title">Nunes Sports</h2>

          <input
            className="register-input"
            type="text"
            name="name"
            placeholder="Nome"
            value={values.name}
            onChange={handleChangeValues}
          ></input>
          <input
            className="register-input"
            type="text"
            name="cost"
            placeholder="Preço"
            value={values.cost}
            onChange={handleChangeValues}
          ></input>
          <input
            className="register-input"
            type="text"
            name="description"
            placeholder="Descrição"
            value={values.description}
            onChange={handleChangeValues}
          ></input>

          <button className="register-button" onClick={handleClickButton}>
            Adicionar
          </button>
        </div>
        {typeof listProducts !== "undefined" &&
          listProducts.map((value) => {
            return (
              <Card
                key={value.idproducts}
                listProducts={listProducts}
                setListProducts={setListProducts}
                id={value.idproducts}
                name={value.name}
                cost={value.cost}
                description={value.description}
                getList={getList}
              />
            );
          })}
      </div>
    </>
  );
};

export default Products;
