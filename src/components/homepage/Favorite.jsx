import React, { useEffect } from "react";
import { useFavorites } from "../context/FavoriteContextProvder";


const Favorites = () => {
  const { favorites, getFavorites, deleteProductFromFavorites } = useFavorites();

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {favorites.products &&
        favorites.products.map((elem) => (
          <div key={elem.item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "8px" }}>
            <img width={"140"} src={elem.item.image} alt="" />
            <h3 style={{fontFamily:"Optima san-serif"}}>{elem.item.title}</h3>
            <p style={{fontFamily:"Optima san-serif"}}>Category: {elem.item.category}</p>
            <p style={{fontFamily:"Optima san-serif"}}>Price: {elem.item.price}</p>
            <button
              onClick={() => deleteProductFromFavorites(elem.item.id)}
              style={{ color: "white", backgroundColor: "#348788", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Favorites;