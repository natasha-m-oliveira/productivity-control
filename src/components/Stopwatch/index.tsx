import { TasksContext, useTasksContext } from 'common/context/Tasks';
import { useContext } from 'react';
import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';

function Stopwatch() {
  const { stopwatch } = useContext(TasksContext);
  const { decrement } = useTasksContext();
  const handleClick = () => {
    decrement(stopwatch);
  };
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.wrapperClock}>
        <Clock />
      </div>
      <Button onClick={handleClick}>Começar!</Button>
    </div>
  );
}

export default Stopwatch;
