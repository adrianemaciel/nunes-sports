import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    idproducts: props.id,
    name: props.name,
    cost: props.cost,
    description: props.description,
  });

  const handleEditProducts = () => {
    axios
      .put("http://localhost:3001/edit", {
        idproducts: editValues.idproducts,
        name: editValues.name,
        cost: editValues.cost,
        description: editValues.description,
      })
      .then((res) => {
        if (res.data.status === "ok") {
          props.getList();
        }
      });

    handleClose();
  };

  const handleDeleteProducts = () => {
    axios
      .delete(`http://localhost:3001/delete/${editValues.idproducts}`)
      .then((res) => {
        if (res.data.status === "ok") {
          props.getList();
        }
      });
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          defaultValue={props.name}
          onChange={handleChangeValues}
          label="Nome do produto"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="cost"
          onChange={handleChangeValues}
          defaultValue={props.cost}
          label="Preço"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          onChange={handleChangeValues}
          defaultValue={props.description}
          label="Descrição"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteProducts}>Excluir</Button>
        <Button onClick={handleEditProducts}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
