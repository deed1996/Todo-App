import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        if(e.key === 'Enter' && value === "") {
            alert('Please enter a valid value');
        } else {
            e.preventDefault();
            editTodo(value, task.id);
            setValue("")
        }
    }

  return (
      <div>
        <form className='EditTodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Press Enter to update task' onChange={(e) => {setValue(e.target.value)}}/>
        </form>
      </div>
  )
}
