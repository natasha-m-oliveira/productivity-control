import { createContext, ReactNode, useContext, useState } from "react";
import INewTask from "types/newTask";
import ITask from "types/task";
import ITasksContext from "types/tasksContext";
import { v4 as uuidv4 } from "uuid";

//Valor default do contexto
const DEFAULT_VALUE = {
  tasks: [],
  setTasks: () => {}, //função de inicialização
  newTask: {
    task: "",
    duration: "00:00",
  },
  setNewTask: () => {},
  stopwatch: 0,
  setStopwatch: () => {},
};

//criando nosso contexto TasksContext

export const TasksContext = createContext<ITasksContext>(DEFAULT_VALUE);

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(DEFAULT_VALUE.tasks);
  const [newTask, setNewTask] = useState(DEFAULT_VALUE.newTask);
  const [stopwatch, setStopwatch] = useState(DEFAULT_VALUE.stopwatch);
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        newTask,
        setNewTask,
        stopwatch,
        setStopwatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  function addTask(newTask: INewTask) {
    setTasks([
      ...tasks,
      {
        ...newTask,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
  }

  function selectTask(selectedTask: ITask) {
    const result = tasks.map((item: ITask) => ({
      ...item,
      selected: item.id === selectedTask.id,
    }));
    setTasks(result);
  }

  function completeTask(taskCompleted: ITask) {
    const index = tasks.findIndex(
      (item: ITask) => item.id === taskCompleted.id
    );
    tasks[index].completed = true;
    setTasks(tasks);
  }

  function findSelectedTask() {
    return tasks.find((item: ITask) => item.selected);
  }

  return {
    setTasks,
    addTask,
    selectTask,
    completeTask,
    findSelectedTask,
  };
};
