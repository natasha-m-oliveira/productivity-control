import { useTasksContext } from "context/Tasks";
import Item from "./Item";
import style from "./style.module.scss";

function Lista() {
  const { tasks } = useTasksContext();
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
