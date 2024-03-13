import { useReducer } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Button from "./components/Button";
import "./App.css";

const initialState = {
  inputValue: "",
  current: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        current: action.payload,
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
