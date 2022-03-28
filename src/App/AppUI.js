import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoEmpty } from '../TodoEmpty';

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext); 
  
  return (
    <React.Fragment>
      <TodoHeader />
      {
        localStorage.getItem('TODOS_V1') !== '[]' 
        ? <TodoSearch />
        : null 
      }        
  
      <TodoList>
        <TodoCounter />
        {
          localStorage.getItem('TODOS_V1') === '[]'
          ? <TodoEmpty />
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

      {openModal && (
        <Modal>
          <TodoForm />
      </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
       />
      
    </React.Fragment>
  );
}

export { AppUI };