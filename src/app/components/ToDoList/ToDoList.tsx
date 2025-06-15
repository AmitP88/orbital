export default function ToDoList() {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  }

  return (
    <div className="to-do-list">
      <h1 className="text-center">ToDoList</h1>
      <div className="add-item-input bg-cornflower-blue h-min">
        <input
          name="input-item"
          type="text"
          onChange={handleInputChange}
          placeholder="Type item here"
          className="mt-3 p-1 border border-gray-300 align-middle bg-gray-200" />
        <button type="submit" className="mt-3 p-2 rounded-full w-full bg-teal-300 text-white">Add Item</button>
      </div>      
      <div className="list">

      </div>
    </div>
  )
}