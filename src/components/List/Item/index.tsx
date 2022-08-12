import { useTasksContext } from "common/context/Tasks";
import ITask from "types/task";
import style from "./Item.module.scss";

function Item({ task, duration, selected, completed, id }: ITask) {
  const { selectTask } = useTasksContext();
  const handleClick = () => {
    selectTask({ task, duration, selected, completed, id });
  };
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""}`}
      onClick={handleClick}
    >
      <h3>{task}</h3>
      <span>{duration}</span>
    </li>
  );
}

export default Item;
