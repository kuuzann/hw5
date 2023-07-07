import React from "react";
import Counter from "./Apps/Counter";
import InputForm from "./Apps/InputForm";
import TodoList from "./Apps/TodoList";

const App = () => {
  return (
    <div>
      <h1>Мой проект</h1>
      <Counter />
      <InputForm />
      <TodoList />
    </div>
  );
};

export default App;
