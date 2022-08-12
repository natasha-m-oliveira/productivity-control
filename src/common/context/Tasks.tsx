import { durationToSeconds } from 'common/utils/time';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import INewTask from 'types/newTask';
import ITask from 'types/task';
import ITasksContext from 'types/tasksContext';
import { v4 as uuidv4 } from 'uuid';

//Valor default do contexto
const DEFAULT_VALUE = {
  tasks: [],
  setTasks: () => {}, //função de inicialização
  newTask: {
    task: '',
    duration: '00:00',
  },
  setNewTask: () => {},
  selectedTask: undefined,
  setSelectedTask: () => {},
  stopwatch: 0,
  setStopwatch: () => {},
};

//criando nosso contexto TasksContext

export const TasksContext = createContext<ITasksContext>(DEFAULT_VALUE);

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(DEFAULT_VALUE.tasks);
  const [newTask, setNewTask] = useState(DEFAULT_VALUE.newTask);
  const [selectedTask, setSelectedTask] = useState<ITask>();
  const [stopwatch, setStopwatch] = useState(DEFAULT_VALUE.stopwatch);
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        newTask,
        setNewTask,
        selectedTask,
        setSelectedTask,
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
  const { setStopwatch } = useContext(TasksContext);
  const { selectedTask, setSelectedTask } = useContext(TasksContext);

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
    setSelectedTask(selectedTask);
  }

  function completeTask() {
    if (selectedTask) {
      setSelectedTask(undefined);
      const result = tasks.map((item) => {
        if (item.id === selectedTask.id) {
          return { ...item, selected: false, completed: true };
        }
        return item;
      });
      setTasks(result);
    }
  }

  function decrement(counter: number) {
    setTimeout(() => {
      if (counter > 0) {
        setStopwatch(counter - 1);
        return decrement(counter - 1);
      }
      completeTask();
    }, 1000);
  }

  //como o watch do vuejs
  useEffect(() => {
    // verifica se selectedtask é um valor true para então acessar duration
    if (selectedTask?.duration) {
      setStopwatch(durationToSeconds(selectedTask.duration));
    }
  }, [selectedTask, setStopwatch]);

  return {
    setTasks,
    addTask,
    selectTask,
    completeTask,
    decrement,
  };
};
