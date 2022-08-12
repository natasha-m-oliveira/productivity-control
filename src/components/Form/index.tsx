import { TasksContext, useTasksContext } from "common/context/Tasks";
import React, { useContext, useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

function Form() {
  const { addTask } = useTasksContext();
  const { newTask, setNewTask } = useContext(TasksContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({
      task: "",
      duration: "00:00",
    });
  };
  return (
    <form className={style.newTask} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          value={newTask.task}
          onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
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
          value={newTask.duration}
          onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
          id="duration"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
