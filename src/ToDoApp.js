import React, { useState } from 'react'

const ToDoApp = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleInputChnage = (e) => {
    setInput(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, checked: false }]);
      setInput('');
    }
  }

  const handleDeleteList = (id) => {
    setTodos(todos.filter((_, i) => i !== id))
  }

  const handleToggleCheck = (id) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen w-screen p-8 '>
      <div className='flex flex-col items-center'>
        <div className='md:text-4xl text-2xl text-white py-4 my-2 '>
          <h2 className='hidden'>Todo Management Application</h2>
          <h2 className=''>Todo Application</h2>
        </div>
        <div className='p-4 m-2 '>
          <form action="" onSubmit={handleFormSubmit} className='flex'>
            <input
              type="text"
              placeholder='Enter a todo...'
              className=" w-50 sm:w-80 p-4 focus:outline-none text-black font-bold tracking-wider rounded-l-md" value={input}
              onChange={handleInputChnage}
              required />
            <button
              type='submit' className=' p-4 bg-gray-500 text-white font-bold hover:bg-black duration-300 rounded-r-md'>Add</button>
          </form>
        </div>

        <div className='w-full fixed top-1/3cl sm:top-1/3 md:w-1/3 bg-gray-500 '>
          <ul className='flex flex-col  text-white text-xl tracking-wider p-4 rounded-md '>
            {todos.map((todo, id) => {
              const { text, checked } = todo;
              return (
                <li key={id} className='flex flex-row justify-between
               items-center m-2'>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleToggleCheck(id)}
                    className='w-5 h-5 rounded '
                  />
                  <>
                    <span style={{ textDecoration: checked ? 'line-through' : 'none' }} className=''>
                      {text}
                    </span>
                  </>
                  <div>
                    <button onClick={() => handleDeleteList(id)} className='right-0 bg-red-500 rounded-md p-2'>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default ToDoApp