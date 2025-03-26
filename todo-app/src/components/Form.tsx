import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddTask }) => {
  const [taskString, setTaskString] = useState("");
  const taskStatus = false;
  return (
    <div className="todo-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskId = crypto.randomUUID();
          onAddTask({ taskString, taskStatus, taskId });
        }}
      >
        <input
          type="text"
          defaultValue={taskString}
          onChange={(e) => {
            setTaskString(e.target.value);
          }}
        />
        <button disabled={taskString.length == 0}>Add</button>
      </form>
    </div>
  );
};
