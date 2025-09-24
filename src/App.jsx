import { useState } from "react"
import BgImage from "./components/BgImage"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList.jsx"

const App = () => {
  const [todos, setTodos] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleTheme(){
    setIsDarkMode(prev => !prev)
    document.documentElement.classList.toggle('dark')
  }

  return <div className="h-screen dark:bg-[#171823]">
    <BgImage isDarkMode={isDarkMode}/>
    <TodoForm setTodos={setTodos} handleTheme={handleTheme} isDarkMode={isDarkMode}/>
    <TodoList todos={todos} setTodos={setTodos} />
  </div>
}

export default App