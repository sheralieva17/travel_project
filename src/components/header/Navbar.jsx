import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
import heart from "../../assets/icons8-сердце-48.png";
import { useFavorites } from "../context/FavoriteContextProvder";
const Navbar = () => {
  const navigate = useNavigate();
  const { logOut, user } = useAuthContext();
  const [favoritesBadgeCount, setFavoritesBadgeCount] = useState(0);
  const { getProductsCountInFavorites, addProductToFavorites } = useFavorites();
  const handleLogout = () => {
    logOut();
    navigate("/login");
  };
  useEffect(() => {
    setFavoritesBadgeCount(getProductsCountInFavorites());
  }, [addProductToFavorites]);
  return (
    <div>
      <div class="header">
        <div class="frame-70">
          <div class="frame-69">
            <div style={{cursor: "pointer"}} onClick={() => navigate("/")}  class="on-trip">On trip</div>
          </div>
          <div class="home">
            <li onClick={() => navigate("/")} class="home2">
              Home
            </li>
            <li class="about">About</li>
            <li class="discover">Discover</li>
            <li class="contact">Contact</li>
            <li
              onClick={() => navigate("/favorites")}
              badgeContent={favoritesBadgeCount}
            >
              <img
                style={{ width: "30px", cursor: "pointer" }}
                src={heart}
                alt="Favorites"
              />
            </li>
          </div>
          <div class="login">
            {user ? (
              <>
                <div class="2">{user.email}</div>
                <div class="frame-17" onClick={handleLogout}>
                  <div class="register">Logout</div>
                </div>
              </>
            ) : (
              <>
                <div class="login2" onClick={() => navigate("/login")}>
                  Login
                </div>
                <div class="frame-17">
                  <div onClick={() => navigate("/register")} class="register">
                    Register
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
