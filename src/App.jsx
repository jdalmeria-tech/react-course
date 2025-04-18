import './App.css'
import Todo from './components/Todo.jsx'
import TodoTitle from './components/TodoTitle.jsx'
import Popup from './components/Popup.jsx'



function App() {

  return (
    <>
     <TodoTitle />
     <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value)
      }}/>
      <button>Add to do</button>
     </div>
     <Todo
     task="Learn Basics of React"
     />
     <Todo
     task="Learn Basics of Next.js"
     />
     <Todo
     task="Create a Start-up WebApp"
     />
     <Todo
     task="Earn, Build, Repeat!"
     />
     <Popup spanTitle="Are you really sure??"/>
    </>
  )
}

export default App

// to create Props
// used to display dynamic data in your components
// Pass in a property name and value like : <Todo task="Learn Basics of React" />
// Accept the property component name inside of the parameter
// to create multiple props: just add a space like how you add attributes in html
// if your prop is a number you can use {} curly brackets