import { useState } from "react"
import moonIcon from "../assets/icon-moon.svg"
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ setTodos }) => {
    const [todo, setTodo] = useState("")


    const newTodo = {
        id: uuidv4(),
        name: todo,
        completed: false
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (todo === '') {
            alert('Input field cannot be empty!')
        } else {
            setTodos((prev) => [...prev, newTodo])
        }

        setTodo('')
    }
    return (
        <div className="max-w-[540px] w-[90%] mx-auto mt-[-150px] lg:mt-[-250px]">
            <div className="flex justify-between items-center">
                <h1 className="uppercase text-white font-bold text-3xl lg:text-5xl tracking-[15px]">Todo</h1>
                <img className="cursor-pointer" src={moonIcon} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="mt-4 lg:mt-10">
                <input value={todo} onChange={(e) => setTodo(e.target.value)} className="px-5 py-4 lg:px-6 lg:py-5 bg-white rounded-[5px] w-full outline-none" type="text" placeholder="Create a new todo…" />
            </form>
        </div>
    )
}

export default TodoForm