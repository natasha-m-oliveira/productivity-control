import { TasksContext, useTasksContext } from "common/context/Tasks";
import { durationToSeconds } from "common/utils/time";
import { useContext } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

function Stopwatch() {
  const { stopwatch, setStopwatch } = useContext(TasksContext);
  const selectedTask = useTasksContext().findSelectedTask();
  if (selectedTask?.duration) {
    setStopwatch(durationToSeconds(selectedTask.duration));
  }
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro.</p>
      <p>Tempo: {stopwatch}</p>
      <div className={style.wrapperClock}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}

export default Stopwatch;
