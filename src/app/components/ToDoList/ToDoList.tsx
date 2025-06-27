'use client'; // marks the component as a Client Component (front end). NextJS components are server components (backend) by default.

import { useState } from "react";

export default function ToDoList() {
  const [Input, setInput] = useState(''); // state of the user's input data from the input element
  const [List, setList] = useState<string[]>([]); // state of the list that is created on submission of user's input data

  // A breakdown of useState<string[]>([])

  // useState
  // React Hook that allows functional components to manage local state. Takes an initial value as an argument and returns an array
  // containing the current state value and a function to update that state.

  // <string[]>
  // TypeScript type parameter that defines the type of the state variable. In this case, it specifies that the state will be an array
  // where each element is a string.

  // ([])
  // The initial value passed to the useState Hook. It initializes the state with an empty array [].

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value); // creates a new Input state that contains the user's input data (event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents page reload when clicking submit button

    const newListContent = Input; // created new variable containing the new Input state
    setList((prevList) => [...prevList, newListContent]); // creates a new List state containing both the new Input state (added as a new list item) and the previous List state
    
    setInput(''); // Clears the input after submission
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

        <div className="list-none mt-12">
          {List.map((content, index) => ( // "content" is the array, "index" is the key
            <div key={index} className="list-item border-2 border-gray-400 mt-3 pl-3">{content}</div>
          ))}
        </div>
      </div>
    </div>
  )
}