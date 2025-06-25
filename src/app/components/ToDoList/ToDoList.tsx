'use client'; // marks the component as a Client Component (front end). NextJS components are server components (backend) by default.

import { useState } from "react";

export default function ToDoList() {
  const [Input, setInput] = useState('');
  const [divs, setDivs] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents page reload when clicking submit button

    const newDivContent = Input;
    setDivs((prevDivs) => [...prevDivs, newDivContent]);
    
    // Optionally, clear the input after submit
    setInput('');
  }

  return (
    <div className="to-do-list">
      <h1 className="text-center">ToDoList</h1>
      <div className="add-item-input bg-cornflower-blue h-min">
        <form className="add-item-input bg-cornflower-blue h-min" onSubmit={handleSubmit}>
          <input
            name="input"
            type="text"
            value={Input}
            onChange={handleInputChange}
            placeholder="Type item here"
            className="w-full mt-3 p-1 border border-gray-300 align-middle bg-gray-200" />
          <button type="submit" className="mt-3 p-2 rounded-full w-full bg-teal-300 text-white">Add Item</button>
        </form>      

        <div>
          {divs.map((content, index) => (
            <div key={index} className="border-2 border-gray-400 mt-6 pl-3">{content}</div>
          ))}
        </div>
      </div>
    </div>
  )
}