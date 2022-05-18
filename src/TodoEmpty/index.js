import React from 'react';
import './TodoEmpty.css';

function TodoEmpty() {
  return (
    <div className='empty-msg'>
      <img src="https://img.icons8.com/external-gliphyline-royyan-wijaya/100/BF1363/external-blank-task-takis-gliphyline-royyan-wijaya.png" alt="imggg" className='empty-img'/>
      <h1 className='empty-title'>Oh! you have nothing to do!</h1>
      <div className='empty-subtitle'>
        <p>Create a task with the <span className='add-button'>+</span> button.</p>
      </div>
    </div>
  );
}

export { TodoEmpty };