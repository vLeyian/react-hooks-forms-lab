import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {

  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")  

  function setNewItemNameChange(e) {
    setNewItemName(e.target.value)
  }
  
  function setNewItemCategoryChange(e) {
    setNewItemCategory(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCategory
    }
    onItemFormSubmit(newItem)
    setNewItemName('')
    setNewItemCategory('')
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={newItemName}
          onChange={setNewItemNameChange}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={newItemCategory}
          onChange={setNewItemCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;