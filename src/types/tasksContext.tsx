import INewTask from './newTask';
import ITask from './task';

interface ITasksContext {
  tasks: ITask[];
  setTasks: (newTasks: ITask[]) => void;
  newTask: INewTask;
  setNewTask: (newTask: INewTask) => void;
  selectedTask: ITask | undefined;
  setSelectedTask: (newTaskSelected: ITask | undefined) => void;
  stopwatch: number;
  setStopwatch: (newTime: number) => void;
}

export default ITasksContext;
