import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { InTask } from "./Interface";
import "./App.css";
import Task from "./components/Task";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<InTask[]>([]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTask = { id: Date.now(), taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };
  const handleDelete = (id: number): void => {
    setTodoList(
      todoList.filter((t) => {
        return t.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h2>Add Task...</h2>
          <input
            required
            type="text"
            name="task"
            value={task}
            onChange={handleInput}
            placeholder="Task..."
          />
          <button className="btn" type="submit">
            Submite
          </button>
        </form>
      </div>
      <div className="tasksList">
        <div>
          <h1>TASKS</h1>
          <table>
            <tr>
              <th>Task name</th>
              <th>Delete</th>
            </tr>
            {todoList.map((task: InTask, key: number) => {
              return <Task key={key} task={task} handleDelete={handleDelete} />;
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
