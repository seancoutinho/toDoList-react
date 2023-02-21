import { useState, Fragment } from 'react'
import "./App.css";
import Buttons from "./components/Buttons"
import Checkbox from "./components/Checkbox"
import {nanoid} from "nanoid"

function App() {
  const [tasks, setTasks] = useState( window.localStorage.getItem("TASKS") || [])
  const date = new Date()

  function createTask() {
    const newTask = {
      id: nanoid(),
      title: "Title 1",
      date: `${date.getTime}, ${date.getMonth}/${date.getDate()}/${date.getFullYear()}`
    }
    
    setTasks(
     )
  }
  
  return (
   <Fragment>
    <h1 className='title'>TODO LIST</h1>
    <Buttons />
    //Take over from here on out
    <Checkbox taskTitle=""/>
   </Fragment>
  )
    
}

export default App
