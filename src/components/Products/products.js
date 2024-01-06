import "./products.css";

const Products = () => {
  return (
    <>
      <div className="container-products">
        <div>
          <h2 className="register-title">Nunes Sports</h2>

          <input
            className="register-input"
            type="text"
            name="name"
            placeholder="nome"
          ></input>
          <input
            className="register-input"
            type="text"
            name="cust"
            placeholder="preço"
          ></input>
          <input
            className="register-input"
            type="text"
            name="description"
            placeholder="descrição"
          ></input>

          <button className="register-button">adicionar</button>
          <button className="register-button">editar</button>
          <button className="register-button">deletar</button>
        </div>
      </div>
    </>
  );
};

export default Products;
