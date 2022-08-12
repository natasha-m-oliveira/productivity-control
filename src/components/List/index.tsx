import { TasksContext } from "common/context/Tasks";
import { useContext } from "react";
import Item from "./Item";
import style from "./List.module.scss";

function Lista() {
  const { tasks } = useContext(TasksContext);
  return (
    <aside className={style.tasksList}>
      <h2>Atividades do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
