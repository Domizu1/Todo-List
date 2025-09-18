import { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const [targetedId, settargetedId] = useState(null);
  const [targetedText, setTargetedText] = useState("");

  function deleteItem(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function startEdit(todo) {
    settargetedId(todo.id);
    setTargetedText(todo.name);
  }
  function toggleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function saveEdit() {
    const text = targetedText.trim();
    if (!text) {
      settargetedId(null);
      setTargetedText("");
      return;
    }

    setTodos((prev) =>
      prev.map((t) => (t.id === targetedId ? { ...t, name: text } : t))
    );

    settargetedId(null);
    setTargetedText("");
  }

  function cancelEdit() {
    settargetedId(null);
    setTargetedText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  }

  return (
    <div className="max-w-[540px] w-[90%] mx-auto bg-white rounded-[5px] mt-4 lg:mt-6 border-2">
      <div className="h-[440px] overflow-auto">
        {todos.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400 italic">
              No tasks yet, add your first todo!
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row justify-between border-b border-[#E3E4F1] px-5 py-4 lg:px-6 lg:py-5 w-full"
            >
              {targetedId === todo.id ? (
                <input
                  className="w-full outline-none border rounded px-2 py-1"
                  value={targetedText}
                  onChange={(e) => setTargetedText(e.target.value)}
                  autoFocus
                  onKeyDown={handleKeyDown}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="cursor-pointer accent-green-300"
                  />
                  <span
                    className={todo.completed ? "line-through text-gray-400" : ""}
                  >
                    {todo.name}
                  </span>
                </div>
              )}

              <div className="flex gap-5 ml-4">
                {targetedId === todo.id ? (
                  <>
                    <button
                      onClick={saveEdit}
                      className="text-green-600 hover:text-green-800 font-bold"
                      title="Save"
                    >
                      ✔
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-gray-500 hover:text-gray-700 font-bold"
                      title="Cancel"
                    >
                      ↩
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => startEdit(todo)}
                    className="text-yellow-500 hover:text-yellow-700"
                    title="Edit"
                  >
                    ✎
                  </button>
                )}

                <button
                  onClick={() => deleteItem(todo.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between px-5 py-4 lg:px-6 lg:py-5">
        <p>Items left {todos.filter((t) => !t.completed).length}</p>
        <button onClick={() => setTodos([])} className="cursor-pointer">
          Clear all
        </button>
      </div>
    </div>
  );
};

export default TodoList;
