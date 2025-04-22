function Todo({ task, togglePopup }) {
  

  return (
    <>
     <div className="todo-item">
      <h2>{ task }</h2>
      <button onClick={() => togglePopup()}>
        Delete
      </button>
     </div>
    </>
  )
}

export default Todo

// Accept the property component name inside of the parameter like this:
// function Todo({ task })
// use the property like this:
// <h2>{ task }</h2>
// to add multiple properties, accept the props: function Todo({ task, description })
// use it just like how you use the first prop you made