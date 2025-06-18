'use client';

import { useState } from "react";

export default function ToDoList() {
  const [Item, setItem] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
    // console.log("Input Value: ", event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents page reload when clicking submit button
    console.log("Item: ", Item);
    // Optionally, clear the input after submit
    setItem('');
  }

  return (
    <div className="to-do-list">
      <h1 className="text-center">ToDoList</h1>
      <div className="add-item-input bg-cornflower-blue h-min">
      <form className="add-item-input bg-cornflower-blue h-min" onSubmit={handleSubmit}>
        <input
          name="input-item"
          type="text"
          value={Item}
          onChange={handleInputChange}
          placeholder="Type item here"
          className="mt-3 p-1 border border-gray-300 align-middle bg-gray-200" />
        <button type="submit" className="mt-3 p-2 rounded-full w-full bg-teal-300 text-white">Add Item</button>
      </form>      

      </div>
    </div>
  )
}