import React, { Component } from "react";
import CardNotas from "./CardNotas";

class ListaDeNotas extends Component {
  render() {
    return <ul>{Array.of("Trabalho", "Trabalho", "Estudos").map((categorias) => {
        return (
            <li>
                <div>{categorias}</div>
                <CardNotas />
            </li>
        )
    })}</ul>;
  }
}

export default ListaDeNotas;
