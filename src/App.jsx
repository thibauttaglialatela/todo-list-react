import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <h1>Exercice todo list</h1>
      <Input />
      <Button buttonText={"ajouter"}/>
      <List></List>
    </>
  );
}

export default App;
