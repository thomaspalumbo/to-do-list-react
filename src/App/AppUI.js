import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader'
import { TodoContainer } from '../TodoContainer'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoEmpty } from '../TodoEmpty';

function AppUI() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext); 

  const validation =  localStorage.getItem('TODOS_V1') === '[]'  || localStorage.getItem("TODOS_V1") === null

  return (
    <React.Fragment>
      <TodoHeader />
        
      {
        validation
        ? <TodoEmpty />
        : <TodoContainer />
      }

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