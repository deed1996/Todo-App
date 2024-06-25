import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        if(e.key === 'Enter' && value === "") {
            alert('Please enter a valid value');
        } else {
            e.preventDefault();
            addTodo(value);
            setValue("")
        }
    }

  return (
      <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Press Enter to create a new todo...' onChange={(e) => {setValue(e.target.value)}}/>
        </form>
      </div>
  )
}
