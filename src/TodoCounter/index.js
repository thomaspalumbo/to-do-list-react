import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

 function TodoCounter() {
     const { totalTodos, completedTodos } = React.useContext(TodoContext) //usamos el contexto
     return (
         <h2 className="TodoCounter">Completed {completedTodos} of {totalTodos} TODOs</h2>
     );
}

export { TodoCounter };