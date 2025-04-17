import './App.css'
import Todo from './components/Todo.jsx'
import TodoTitle from './components/TodoTitle.jsx'
import Popup from './components/Popup.jsx'



function App() {

  return (
    <>
     <TodoTitle />
     <Todo task="Learn Basics of React" />
     <Todo task="Learn Basics of Next.js" />
     <Todo task="Create a Start-up WebApp" />
     <Todo task="Earn, Build, Repeat!"/>
     {/* <Popup /> */}
    </>
  )
}

export default App

// to create Props
// used to display dynamic data in your components
// assign a variable
// you can use destructuring for better code as you pass it in your component