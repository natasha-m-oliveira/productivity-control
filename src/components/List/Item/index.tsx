import style from "../style.module.scss";

function Item({ task, duration }: { task: string; duration: string }) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{duration}</span>
    </li>
  );
}

export default Item;
