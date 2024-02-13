import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ACTION,API_PACKAGES, API_CATEGORIES } from "../helpers/const";

const packageContext = createContext();

export const usePackage = () => useContext(packageContext);

const INIT_STATE = {
  packages: [],
  onePackage: null,
  categories: [],
  
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_PACKAGES:
      return { ...state, packages: action.payload.data };
      

    case ACTION.GET_ONE_PACKAGE:
      return { ...state, onePackage: action.payload };
      
    case ACTION.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

const PackageContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPackages() {
    try {
      let res = await axios(`${API_PACKAGES}/${window.location.search}`);
      dispatch({
        type: ACTION.GET_PACKAGES,
        payload: res,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  
  

  async function getOnePackage(id) {
    try {
      
      let { data } = await axios(`${API_PACKAGES}/${id}`);
      
      dispatch({
        type: ACTION.GET_ONE_PACKAGE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  

  async function createPackage(newPackage) {
    try {
      await axios.post(API_PACKAGES, newPackage);
      navigate("/packages")
    } catch (error) {
      console.log(error);
    }
  }

  async function editPackage(editedPackage) {
    try {
      const { id } = editedPackage; // Извлекаем id из editedPackage
      const { data } = await axios.patch(`${API_PACKAGES}/${id}`, editedPackage);
      navigate('/packages');
    } catch (error) {
      console.log(error);
    }
  }
  
  
  async function deletePackage(id) {
    try {
      await axios.delete(`${API_PACKAGES}/${id}`);
	  getPackages();
    } catch (error) {
      console.log(error);
    }
  }

  //! GET_CATEGORIES
  const getCategories = async () => {
    const result = await axios(API_CATEGORIES);
    dispatch({ type: ACTION.GET_CATEGORIES, payload: result.data });

  };
  //! CREATE_CATEGORIES
  const createCategories = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
  };

  
//!==========================SEARCH && FILTER===========================
const fetchByParams = (query, value) => {
  const search = new URLSearchParams(window.location.search);

  if (value === "all") {
    search.delete(query);
  } else {
    search.set(query, value);
  }

  const url = `${window.location.pathname}?${search.toString()}`;
  console.log("Generated URL:", url); 
  navigate(url);
  getPackages();
};


  const values = {
    createPackage,
    getPackages,
    packages: state.packages,
    onePackage: state.onePackage,
    getOnePackage,
    getCategories,
    createCategories,
    categories: state.categories,
	  editPackage,
	  deletePackage,
    fetchByParams,
  };
  return (
    <packageContext.Provider value={values}>{children}</packageContext.Provider>
  );
};

export default PackageContextProvider;
