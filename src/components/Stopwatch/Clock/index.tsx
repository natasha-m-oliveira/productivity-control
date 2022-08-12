import { TasksContext } from 'common/context/Tasks';
import { useContext } from 'react';
import style from './Clock.module.scss';

function Clock() {
  const { stopwatch } = useContext(TasksContext);
  const minutes = Math.floor(stopwatch / 60);
  const seconds = stopwatch % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.clockNumber}>{minuteTen}</span>
      <span className={style.clockNumber}>{minuteUnit}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{secondTen}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </>
  );
}

export default Clock;
