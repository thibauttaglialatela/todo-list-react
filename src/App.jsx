import { useReducer } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Button from "./components/Button";
import "./App.css";

const initialState = {
  counter: 0,
  todos: [
    {
      id: 1,
      text: "One",
    },
    {
      id: 2,
      text: "Two",
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      const newCounter = state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.text,
      }
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo]

      };

    default:
      return {
        ...state,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddItem(event) {
    dispatch({
      type: "addItem",
      payload: event.target.value,
    });
  }
  return (
    <>
      <h1>Exercice todo list</h1>
      <Input value={state} handleChange={handleAddItem} />
      <Button handleClick={handleAddItem} buttonText={"ajouter"} />
      <List></List>
    </>
  );
}

export default App;
