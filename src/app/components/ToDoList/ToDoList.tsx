export default function ToDoList() {
  return (
    <div className="ToDoList">
      <h1 className="text-center">ToDoList</h1>
      <div className="addItemInput bg-cornflower-blue h-min">
        <input name="input-item" className="align-middle border-red-50 bg-green-500" type="text" placeholder="type item here" required />
        <button className="w-full bg-teal-300 text-red-600">Add Item</button>
      </div>      
      <div className="list">

      </div>
    </div>
  )
}