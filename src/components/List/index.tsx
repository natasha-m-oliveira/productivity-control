import React from "react";
import Item from "./Item";
import style from "./style.module.scss";

function Lista() {
  const tasks = [
    {
      task: "React",
      duration: "02:00:00",
    },
    {
      task: "JavaScript",
      duration: "01:00:00",
    },
    {
      task: "typeScript",
      duration: "02:30:00",
    },
  ];
  return (
    <aside className={style.tasksList}>
      <h2>Atividades do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
