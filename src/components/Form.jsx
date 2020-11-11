import React from "react";

const Form = (props) => {
  return (
    <form className="header" onSubmit={props.handleToggle}>
      <input
        type="text"
        onChange={props.inputHandler}
        placeholder="Escreva Seu usuário GitHub"
        className="input-header"
      />
      <button className="card-header" type="submit">
        {props.active === false ? "Motrar Git Card" : "Voltar"}
      </button>
    </form>
  );
};

export default Form;

/* 
handleToggle
inputHandler
active
*/
