import { useState } from "react";
import "./products.css";

const Products = () => {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values);
  };

  return (
    <>
      <div className="container-products">
        <div>
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
            name="cust"
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
      </div>
    </>
  );
};

export default Products;
