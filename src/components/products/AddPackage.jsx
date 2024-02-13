import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePackage } from '../context/PackageContextProvider';
import CategorySelect from './CategorySelect';

const AddPackage = () => {
  const { categories, getCategories, createPackage } = usePackage();
  const [newPackage, setNewPackage] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    tickPrice:"",
    price: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleInput = (e) => {
    if (e.target.name === "price" ||e.target.name ==="tickPrice" ) {
      const obj = { ...newPackage, [e.target.name]: Number(e.target.value) };
      setNewPackage(obj);
    } else {
      const obj = { ...newPackage, [e.target.name]: e.target.value };
      setNewPackage(obj);
    }
  };

  return (
    <div>
      <h2>Add Package</h2>
      <input onChange={handleInput} placeholder='title' name="title" type="text" />
      <input onChange={handleInput} placeholder='description' name="description" type="text" />
      <input onChange={handleInput} placeholder='img' name="image" label="Image URL" />
      <input onChange={handleInput} placeholder='price' name="price" type="number" />
      <input onChange={handleInput} placeholder='price of ticket' name="tickPrice" type="number" />
      <CategorySelect handleInput={handleInput} categories={categories} selectedCategory={newPackage.category} />
      <button onClick={() => createPackage(newPackage)}>Add package</button>
    </div>
  );
}

export default AddPackage;
