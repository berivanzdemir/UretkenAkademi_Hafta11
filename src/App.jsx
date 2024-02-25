import { useReducer, useState, useContext } from "react";

import {
  INCREMENT,
  RESET,
  DECREMENT,
  countReducer,
  initialCountState,
} from "./reducer/counter";
import About from "./About";
import { SiteContext } from "./context/SiteContext";
import ContextAboutPage from "./ContextAboutPage";
import AddToDo from "./AddToDo";
function App() {
  // const[count,dispatch]=useReducer(countReducer,initialCountState)
  const {
    counter: { state, dispatch },
  } = useContext(SiteContext);
  console.log(state);

  return (
    <>
<AddToDo/>
<hr />

      <h2>sayaç:::{state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sıfırla</button>

      <hr />
      <hr />
      <ContextAboutPage />
      <hr />
      <About />
    </>
  );
}

export default App;
