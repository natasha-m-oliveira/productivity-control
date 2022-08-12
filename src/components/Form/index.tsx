import { useTasksContext } from "context/Tasks";
import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

function Form() {
  const { addTask, setTasks } = useTasksContext();
  const [newTask, setNewTask] = useState({
    task: "",
    duration: "00:00",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setTasks([{
    //   ...newTask,
    //   selected: false,
    //   completed: false,
    //   id: "1",
    // }])
    addTask(newTask);
    setNewTask({
      task: "",
      duration: "00:00",
    });
  }
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
