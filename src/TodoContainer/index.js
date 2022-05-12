import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext';

function TodoContainer() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext)
    return(
        <TodoList>
        <TodoCounter />
        
        {
        localStorage.getItem('TODOS_V1') !== '[]' 
        ? <TodoSearch />
        : null 
      }     
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    )
}

export { TodoContainer }