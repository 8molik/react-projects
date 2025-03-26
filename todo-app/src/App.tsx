import { useState } from "react";
import { Form } from "./components/Form";
import { ShowTask } from "./components/ShowTask";
import { TaskProps } from "./components/ShowTask.types";
import './App.css'

const initialTasks = [
  {
    taskId: crypto.randomUUID(),
    taskString: "Posprzątaj dom",
    taskStatus: false,
  },
  {
    taskId: crypto.randomUUID(),
    taskString: "Wyjdź z psem na spacer",
    taskStatus: false,
  },
];

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks)

  const addTask = (newTask: TaskProps): void => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  const removeTask = (taskId: string): void => {
    setTasks(tasks.filter((task) => task.taskId !== taskId)) 
  }

  return (
    <>
      <h1>TODO App</h1>
      <ul>
        {tasks.map((task) => (
          <ShowTask
            key={task.taskId}
            task={task}
            onRemoveTask={removeTask}
          />
        ))}
      </ul>
      <Form onAddTask={addTask} />
    </>
  );
}

export default App;
