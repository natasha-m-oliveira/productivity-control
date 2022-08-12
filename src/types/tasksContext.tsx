import ITask from "./task";

interface ITasksContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default ITasksContext;
