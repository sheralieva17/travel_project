import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADMIN_USERS } from "../helpers/const";
import { useAuthContext } from "../context/AuthContextProvider";
import { usePackage } from "../context/PackageContextProvider";
import "./Package.css";
import heart from "../../assets/icons8-сердце-48.png";
import { useFavorites } from "../context/FavoriteContextProvder";

export default function Package({ elem }) {
  const navigate = useNavigate();
  const { deletePackage } = usePackage();
  const { addProductToFavorites } = useFavorites();
  const { user } = useAuthContext();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="onePackage">
      <img
        className="main-image"
        src={elem.image}
        alt="Package"
        onClick={() => navigate(`/details/${elem.id}`)}
      />
      <div>
        <h3>{elem.title}</h3>
      </div>
      <div className="content">
        <h6>{elem.category}</h6>
        <p className="pack-price">{elem.price} $</p>
      </div>
      <button
        onClick={() => {
          addProductToFavorites(elem);
          setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        }}
        aria-label="add to favorites"
        style={{
          color: isFavorite ? "red" : "white",
          background: "none",
          border: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill={isFavorite ? "red" : "white"}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
      {ADMIN_USERS.map((item, index) =>
        user && item.email === user.email ? (
          <div key={index} className="admin-buttons-container">
            <button
              className="edit"
              onClick={() => navigate(`/edit/${elem.id}`)}
            >
              Edit
            </button>
            <button className="delete" onClick={() => deletePackage(elem.id)}>
              Delete
            </button>
          </div>
        ) : null
      )}
    </div>
  );
}
