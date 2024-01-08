import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import Card from "../Cards/card";

const Products = () => {
  const [values, setValues] = useState();
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
        console.log(response);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCards").then((response) => {
      setListProducts(response.data);
    });
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
            onChange={handleChangeValues}
          ></input>
          <input
            className="register-input"
            type="text"
            name="cost"
            placeholder="Preço"
            onChange={handleChangeValues}
          ></input>
          <input
            className="register-input"
            type="text"
            name="description"
            placeholder="Descrição"
            onChange={handleChangeValues}
          ></input>

          <button className="register-button" onClick={handleClickButton}>
            adicionar
          </button>
          <button className="register-button" onClick={handleClickButton}>
            editar
          </button>
          <button className="register-button" onClick={handleClickButton}>
            deletar
          </button>
        </div>
        {typeof listProducts !== "undefined" &&
          listProducts.map((value) => {
            return (
              <Card
                key={value.id}
                listCard={listProducts}
                setListCard={setListProducts}
                id={value.id}
                name={value.name}
                cost={value.cost}
                description={value.description}
              />
            );
          })}
      </div>
    </>
  );
};

export default Products;
