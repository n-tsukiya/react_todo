import { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

export const App = () => {
  const [todoText, SetTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    SetTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    SetTodoText("");
  };

  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(i, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[i]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, i) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(i)}>完了</button>
                <button onClick={() => onClickDelete(i)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(i)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
