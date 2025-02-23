import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [task, setTask] = useState([
    { todo: "sample Task", id: uuidv4(), isDone: false },
  ]); // All Tasks, updated when add button is clicked

  let [newTask, setNewTask] = useState("");

  function addNewTask() {
    setTask((prevValue) => {
      return [...prevValue, { todo: newTask, id: uuidv4(), isDone: false }];
    });

    setNewTask("");
  }

  function updateTaskValue(event) {
    setNewTask(event.target.value);
  }

  function deleteTask(id) {
    let result = task.filter((el) => {
      return el.id != id;
    });
    setTask([...result]);
  }

  function upperCaseAll() {
    setTask((prevValue) =>
      prevValue.map((el) => {
        return { ...el, todo: el.todo.toUpperCase() };
      })
    );
  }

  function upperCase(id) {
    setTask((prevValue) =>
      prevValue.map((el) => {
        if (el.id != id) {
          return el;
        } else {
          return { ...el, todo: el.todo.toUpperCase() };
        }
      })
    );
  }

  function singleDone(id) {
    setTask((prevValue) =>
      prevValue.map((el) => {
        if (el.id != id) {
          return el;
        } else {
          return { ...el, isDone: true };
        }
      })
    );
  }

  function unDone(id) {
    setTask((prevValue) =>
      prevValue.map((el) => {
        if (el.id != id) {
          return el;
        } else {
          return { ...el, isDone: false };
        }
      })
    );
  }

  function allDone() {
    setTask((prevValue) =>
      prevValue.map((el) => {
        return { ...el, isDone: true };
      })
    );
  }
  return (
    <>
      <h4>To Do List</h4>
      <input
        placeholder="Enter a Task you want to add"
        name="task"
        onChange={updateTaskValue}
        value={newTask}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      <hr></hr>

      <h4> Task to Do</h4>
      <ul>
        {task.map((el) => {
          console.log(el);

          return (
            <li
              key={el.id}
              style={
                el.isDone == true ? { textDecoration: "line-through" } : {}
              }
            >
              {el.todo}
              <button onClick={() => deleteTask(el.id)}>delete</button>
              <button onClick={() => upperCase(el.id)}>Upper Case</button>
              <button
                onClick={
                  el.isDone === false
                    ? () => singleDone(el.id)
                    : () => unDone(el.id)
                }
              >
                {el.isDone == true ? "Mark as UnDone" : "Mark as Done"}
              </button>
            </li>
          );
        })}
      </ul>
      <br></br>
      <hr></hr>
      <button onClick={upperCaseAll}>UpperCase All</button>
      <br></br>
      <button onClick={allDone}>Mark all as Done</button>
    </>
  );
}
