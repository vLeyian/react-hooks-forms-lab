import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && !searchItem) {
      return true;
    } else if(selectedCategory === "All" && searchItem){
      return item.name.includes(searchItem)
    } else if(!searchItem) {
      return item.category === selectedCategory;
    } else {
      return item.category === selectedCategory && item.name.includes(searchItem)
    }   
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        onSearchChange={setSearchItem} 
        search={searchItem} 
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;