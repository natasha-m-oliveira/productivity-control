import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.newTask}>
        <div className={style.inputWrapper}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="duration">Duração</label>
          <input
            type="time"
            step="1"
            name="duration"
            id="duration"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Form;
