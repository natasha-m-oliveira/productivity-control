import INewTask from "./newTask";
import ITask from "./task";

interface ITasksContext {
  tasks: ITask[];
  setTasks: (newTasks: ITask[]) => void;
  newTask: INewTask;
  setNewTask: (newTask: INewTask) => void;
  stopwatch: number;
  setStopwatch: (newTime: number) => void;
}

export default ITasksContext;
