import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(0);
  const [displayed, setDisplayed] = useState([]);
  useEffect(() => {
      switch (filter){
          case 0:
              setDisplayed(list);
              break;
          case 1:
              setDisplayed(list.filter(e => e.isCompleted))
              break;
          case 2:
              setDisplayed(list.filter(e => !e.isCompleted))
              break;
          default:
              break;
      }
  }, [filter, list])
  return (
    <div className="App">
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <TodoInput value={{list, setList}}/>
      <TodoFilter value={{filter, setFilter}}/>
        <button onClick={() => setList(list.filter(e => !e.isCompleted))}>Delete isCompleted</button>
      <TodoList value={{displayed, setList}}/>
    </div>
  );
}

export default App;
