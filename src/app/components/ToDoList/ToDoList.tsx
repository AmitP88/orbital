import "./ToDoList.css"

export default function ToDoList() {
  return (
    <div className="ToDoList">
      <h1 className="text-center">ToDoList</h1>
      <div className="addItemInput">
        <input name="input-item" className="align-middle border-red-50" type="text" placeholder="type item here" required />
        <button className="w-full">Add Item</button>
      </div>      
      <div className="list">

      </div>
    </div>
  )
}