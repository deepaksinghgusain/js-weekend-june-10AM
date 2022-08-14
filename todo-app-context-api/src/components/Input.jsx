import React, { useContext, useState } from "react";
import TodoContext from "../store/store";

function Input() {
  const [todo, setTodo] = useState("");
  const [err, setErr] = useState(false);

  const store = useContext(TodoContext);

  const add = (event) => {
    event.preventDefault();

    if (todo.length > 0) {
		store.addTodo(todo)
      setTodo("");
    } else {
      setErr(true);
    }
  };

  return (
    <form className="row g-3" onSubmit={add}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
            setErr(false);
          }}
        />
        {err && <p className="text-danger">Please insert valid todo</p>}
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default Input;
