import React, { useState } from 'react'
import './style.css'
import ListProducts from './ListProducts';
export default function DisplayProduct() {
    const products = [
        { name: "Smartphone", category: "Electronics", price: 699 },
        { name: "Laptop", category: "Electronics", price: 999 },
        { name: "T-Shirt", category: "Clothing", price: 19 },
        { name: "Jeans", category: "Clothing", price: 49 },
        { name: "Novel", category: "Books", price: 15 },
        { name: "Cookbook", category: "Books", price: 20 }
    ];

    let [selectCategory,setSelectCategory]=useState("all");

    const getGategory=(event)=>
    {
        setSelectCategory(event.target.value);
        console.log(event.target.value);
    };

    const filterCategory = selectCategory === 'all'? products 

    : products.filter((product) => product.category === selectCategory);
  return (
    <div>
        <h1 className='mainDiv'>Product List</h1>

        <div className="drop">
            <label>Filter by category:</label>
        <select className='dropdown' value={selectCategory} onChange={  getGategory}>
            <option value="all">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
        </select>
        </div>

        <div className="displayProduct">
            <ListProducts products={filterCategory}/>
        </div>

    </div>
  )
}
