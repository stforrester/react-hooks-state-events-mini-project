import React, { useState } from "react";

function CategoryFilter({ categories, selected, setSelected }) {

  const categoryButtons = categories.map((category) => {
    const isSelected = category === selected ? "selected" : "";
    return (
      <button key={category} className={isSelected} onClick={() => setSelected(category)} >{category}</button>
    );
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
