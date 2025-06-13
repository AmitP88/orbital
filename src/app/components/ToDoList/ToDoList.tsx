export default function ToDoList() {
  return (
    <div className="ToDoList">
      <h1 className="text-center">ToDoList</h1>
      <div className="addItemInput bg-cornflower-blue h-min">
        <input name="input-item" className="mt-3 p-1 border border-gray-300 align-middle bg-gray-200" type="text" placeholder="Type item here" required />
        <button className="mt-3 p-2 rounded-full w-full bg-teal-300 text-white">Add Item</button>
      </div>      
      <div className="list">

      </div>
    </div>
  )
}