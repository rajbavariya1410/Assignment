import { useEffect, useState, useRef } from "react";
import $ from "jquery";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    $("#loader").fadeIn(400).delay(800).fadeOut(400);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      $(listRef.current)
        .find("li:last")
        .hide()
        .slideDown(300)
        .fadeIn(300);
    }
  }, [tasks]);

  const addTask = (e) => {
    if (e.key === "Enter") {
      if (input.trim() === "") return;

      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const li = $(listRef.current).find("li").eq(index);
    li.toggleClass("line-through bg-green-200");
    li.animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
  };

  const deleteTask = (index) => {
    const li = $(listRef.current).find("li").eq(index);

    li.slideUp(200).fadeOut(200, () => {
      setTasks(tasks.filter((_, i) => i !== index));
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h2 className="text-3xl font-semibold text-center mb-6">
        React + jQuery Task Manager
      </h2>

      {/* Loader */}
      <div
        id="loader"
        className="hidden text-center text-xl font-semibold text-blue-600 mb-4"
      >
        Loading...
      </div>

      <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
        {/* Input */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTask}
          placeholder="Enter task & press Enter..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-500"
        />

        {/* Task List */}
        <ul ref={listRef} className="mt-4 space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleComplete(index)}
              className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-md cursor-pointer"
            >
              <span>{task}</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
