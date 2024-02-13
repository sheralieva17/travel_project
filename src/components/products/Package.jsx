import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADMIN_USERS } from "../helpers/const";
import { useAuthContext } from "../context/AuthContextProvider";
import { usePackage } from "../context/PackageContextProvider";
import './Package.css';  // Import the CSS styles

export default function Package({ elem }) {
  const navigate = useNavigate();
  // const { addProductToFavorites } = useFavorites();
  const { deletePackage } = usePackage();
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuthContext();

  return (
    <div className="onePackage">
      <img
        src={elem.image}
        alt="Package"
        height="300"
        width="280"
        onClick={() => navigate(`/details/${elem.id}`)}
      />

      <div>
        <h1>{elem.title}</h1>
      </div>

      <div className="content">
        <h6>{elem.category}</h6>
        <p className="pack-price">{elem.price} $</p>
      </div>

      <div>
        {/* <button
          className={`favorite ${isFavorite ? 'active' : ''}`}
          onClick={() => {
            addProductToFavorites(elem);
            setIsFavorite((prevIsFavorite) => !prevIsFavorite);
          }}
        >
          Add to Favorites
        </button> */}

        {ADMIN_USERS.map((item, index) =>
          user && item.email === user.email ? (
            <div key={index} className="admin-buttons-container">
              <button
                className="edit"
                onClick={() => navigate(`/edit/${elem.id}`)}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => deletePackage(elem.id)}
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
