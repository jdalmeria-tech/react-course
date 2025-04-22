import './App.css'
import Todo from './components/Todo.jsx'
import TodoTitle from './components/TodoTitle.jsx'
import Popup from './components/Popup.jsx'
import Counter from './components/Counter.jsx'
import { useState } from 'react'



function App() {

  const [popupOpen, setPopupOpen] =  useState(false);
  // it's like saying popupOpen = false

  function togglePopup() {
    setPopupOpen(true);
    console.log('parent notified!');
  }

  function closePopup() {
    setPopupOpen(false)
  }

  return (
    <>
     <TodoTitle />
     <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value)
      }}/>
      <button onClick={() => setPopupOpen(true)}>Add to do</button>
     </div>
     <Todo
     task="Learn Basics of React"
     togglePopup = {togglePopup}
     />
     <Todo
     task="Learn Basics of Next.js"
     togglePopup = {togglePopup}
     />
     <Todo
     task="Create a Start-up WebApp"
     togglePopup = {togglePopup}
     />
     <Todo
     task="Earn, Build, Repeat!"
     togglePopup = {togglePopup}
     />
     { popupOpen && <Popup closePopup = {closePopup} spanTitle="Are you really sure??"/> }
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

// learning Hooks
// this is a longer code: { popUp ? <Popup spanTitle="Are you really sure??"/> : null }
// this is a shorter one: { popUp && <Popup spanTitle="Are you really sure??"/> }