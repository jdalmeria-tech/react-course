function Todo({ task, description }) {
  return (
    <>
     <div className="todo-item">
      <h2>{ task }</h2>
      <p>{ description }</p>
      <button>Delete</button>
     </div>
    </>
  )
}

export default Todo

// Accept the property component name inside of the parameter like this:
// function Todo({ task })
// use the property like this:
// <h2>{ task }</h2>