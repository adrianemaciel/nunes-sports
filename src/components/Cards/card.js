import React from "react";
import { useState } from "react";
import "./card.css";
import FormDialog from "../Dialog/dialog";

const Card = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={props.id}
        name={props.name}
        cost={props.cost}
        description={props.description}
        listProducts={props.listProducts}
        setListProducts={props.setListProducts}
        getList={props.getList}
      />
      <div className="card-container" onClick={() => handleClickCard()}>
        <h2 className="card-title">{props.name}</h2>
        <p className="card-cost">R$ {props.cost}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </>
  );
};

export default Card;
