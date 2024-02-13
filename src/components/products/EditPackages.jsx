import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { usePackage } from "../context/PackageContextProvider";

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { editPackage, getOnePackage, onePackage } = usePackage();
  const [newPackage, setNewPackage] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    tickPrice:"",
    price: "",
  });

  useEffect(() => {
    getOnePackage(id);
  }, []);

  useEffect(() => {
    if (onePackage) {
      setNewPackage(onePackage);
    }
  }, [onePackage]);

  const handleInput = (e) => {
    if (e.target.name === "price" || e.target.value === "tickPrice") {
      const obj = { ...newPackage, [e.target.name]: Number(e.target.value) };
      setNewPackage(obj);
    } else {
      const obj = { ...newPackage, [e.target.name]: e.target.value };
      setNewPackage(obj);
    }
  };
  return (
    <div
      style={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h4 style={{ textAlign: "center" }}>EDIT PRODUCT</h4>
      {onePackage && (
        <>
          <input
            onChange={handleInput}
            value={newPackage.title}
            name="title"
            placeholder="Title"
          />
          <input
            onChange={handleInput}
            value={newPackage.description} 
            name="description"
            placeholder="Description"
          />
          <input
            onChange={handleInput}
            value={newPackage.price}
            name="price"
            placeholder="Price"
          />
          <input
            onChange={handleInput}
            value={newPackage.tickPrice}
            name="tickPrice"
            placeholder="Ticket Price"
          />
          <input
            onChange={handleInput}
            value={newPackage.image}
            name="image"
            placeholder="Image URL"
          />
          <button onClick={()=>editPackage(id, newPackage)}>Edit PRODUCT</button>
        </>
      )}
    </div>
  );
      }

export default EditPackage;
