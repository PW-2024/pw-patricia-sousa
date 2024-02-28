import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientes: [
        "Farinha",
        "Açúcar",
        "Ovos",
        "Leite",
        "Manteiga",
        "Fermento em pó",
      ],
    };
  }

  render() {
    const { ingredientes } = this.state;
    return (
      <div>
        <h1>Lista de Ingredientes</h1>
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Homepage;
