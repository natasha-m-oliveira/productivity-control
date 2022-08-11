import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

function Form() {
  const [state, setSate] = useState({
    task: "",
    duration: "00:00",
  });
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  } 
  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputWrapper}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          value={state.task}
          onChange={(e) => setSate({...state, task: e.target.value})}
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
          value={state.duration}
          onChange={(e) => setSate({ ...state, duration: e.target.value })}
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

export default Form;
