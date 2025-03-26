import { useState } from "react";
import { TaskProps } from "./ShowTask.types";
import "./ShowTask.css";

export const ShowTask = ({
  task,
  onRemoveTask,
}: {
  task: TaskProps;
  onRemoveTask: (id: string) => void;
}) => {
  const [status, setStatus] = useState(false);
  return (
    <li>
      <div className="task">
        <span className={`task-text ${status ? "line-through" : ""}`}>
          {task.taskString}
        </span>
        <div className="task-actions">
          <input
            className="checkbox"
            type="checkbox"
            checked={status}
            onClick={() => {
              setStatus(!status);
            }}
          ></input>
          <button
            onClick={() => {
              onRemoveTask(task.taskId);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
