import INewTask from "./newTask";

interface ITask  extends INewTask {
    selected: boolean,
    completed: boolean,
    id: string
}

export default ITask;