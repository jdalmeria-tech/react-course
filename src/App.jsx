import './App.css'
import Todo from './components/Todo.jsx'
import TodoTitle from './components/TodoTitle.jsx'
import Popup from './components/Popup.jsx'



function App() {

  return (
    <>
     <TodoTitle />
     <Todo
     task="Learn Basics of React"
     description="3hrs everyday"
     />
     <Todo
     task="Learn Basics of Next.js"
     description="4hrs everyday"
     />
     <Todo
     task="Create a Start-up WebApp"
     description="Build the Bridgr App"
     />
     <Todo
     task="Earn, Build, Repeat!"
     description="Keep grinding, be an entrepreneur!"
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