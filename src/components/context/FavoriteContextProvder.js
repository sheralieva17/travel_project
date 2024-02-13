import React, { createContext, useContext, useReducer } from "react";

import { ACTION } from "../helpers/const";
import { calcFavoritesTotalPrice, getFavoritesLocalStorage, getProductsCountInFavorites } from "../helpers/function";


export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  favoritesLength: getProductsCountInFavorites(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorites = () => {
    let favorites = getFavoritesLocalStorage();
    console.log(favorites);

    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({ products: [], totalPrice: 0 })
      );

      favorites = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({ type: ACTION.GET_FAVORITES, payload: favorites });
    console.log(favorites);
  };

  const addProductToFavorites = (product) => {
    let favorites = getFavoritesLocalStorage();
    if (!favorites) {
      favorites = { products: [], totalPrice: 0 };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
     
    let productToFind = favorites.products.filter(
      (elem) => elem.item.id === product.id
    );
    console.log(newProduct);
    if (productToFind.length === 0) {
      let newArr = favorites.products.push(newProduct);
      console.log(newArr);
    } else {
      favorites.products = favorites.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    console.log(favorites.products);
    favorites.totalPrice = calcFavoritesTotalPrice(favorites.products);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({ type: ACTION.GET_FAVORITES, payload: favorites });
  };

  const checkProductInFavorites = (id) => {
    let favorites = getFavoritesLocalStorage();
    if (favorites) {
      let newFavorites = favorites.products.filter(
        (elem) => elem.item.id === id
      );
      return newFavorites.length > 0 ? true : false;
    }
  };

  const deleteProductFromFavorites = (id) => {
    let favorites = getFavoritesLocalStorage();
    favorites.products = favorites.products.filter(
      (elem) => elem.item.id !== id
    );
    favorites.totalPrice = calcFavoritesTotalPrice(favorites.products);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({
      type: ACTION.GET_FAVORITES,
      payload: favorites,
    });
  };

  const values = {
    addProductToFavorites,
    favorites: state.favorites,
    getFavorites,
    checkProductInFavorites,
    deleteProductFromFavorites,
    getProductsCountInFavorites,
  };

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;