import { createContext, ReactNode, useContext, useState } from "react";
import ITask from "types/task";
import { v4 as uuidv4 } from "uuid";

//Tipando os dados que quero para tarefa
type TaskType = {
  task: string;
  duration: string;
  selected: boolean;
  completed: boolean;
  id: string;
};

//Tipando as Props do contexto
type PropsTaskContext = {
  tasks: TaskType[];
  // setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  setTasks: (newTasks: TaskType[]) => void;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  tasks: [],
  setTasks: () => {}, //função de inicialização
};

//criando nosso contexto TasksContext

export const TasksContext = createContext<PropsTaskContext>(DEFAULT_VALUE);

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(DEFAULT_VALUE.tasks);
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  function addTask(newTask: { task: string; duration: string }) {
    const result = [
      ...tasks,
      {
        ...newTask,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]
    setTasks(result);
    console.log(result);
  }

  function selectTask(selectedTask: TaskType) {
    const result = tasks.map((item: TaskType) => {
      if (item.id === selectedTask.id) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    setTasks(result);
  }

  function completeTask(taskCompleted: TaskType) {
    const index = tasks.findIndex(
      (item: TaskType) => item.id === taskCompleted.id
    );
    tasks[index].completed = true;
    setTasks(tasks);
  }

  return {
    tasks,
    setTasks,
    addTask,
    selectTask,
    completeTask,
  };
};
