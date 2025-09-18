import { useState } from "react"
import BgImage from "./components/BgImage"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList.jsx"

const App = () => {
  const [todos, setTodos] = useState([])

  return <div className="h-screen">
    <BgImage />
    <TodoForm setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
  </div>
}

export default App