import { useState } from "react";
import "../style.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [ctr, setCtr] = useState(0);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos((todos) => {
        return todos.concat({
          todo: inputValue,
          id: ctr,
        });
      });
      setCtr((p) => p + 1);
    }
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <section>
        <div className="input-container">
          <input
            type="text"
            className="todo-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a Todo"
          />
          <button className="add-todo-btn" onClick={addTodo}>Add Todo</button>
        </div>
        <div>
          <ul className="todos">
            {todos.map(({ id, todo }) => (
              <li className={`${id}`} key={id}>
                <span>{todo}</span>
                <button className="remove-btn" onClick={() => removeTodo(id)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
