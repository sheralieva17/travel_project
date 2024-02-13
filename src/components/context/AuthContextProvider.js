import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
  } from "react";
  
  import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  
  import { useNavigate } from "react-router-dom";
  import { auth } from "../../firebase";
import { ACTION_USER } from "../helpers/const";
  
  const authContext = createContext();
  export const useAuthContext = () => useContext(authContext);
  
  const INIT_STATE = {
    user: null,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_USER.CHECK_USER:
        return { ...state, user: action.payload };
      default:
        return { ...state };
    }
  };
  
  const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
  
    const checkUser = () => {
      onAuthStateChanged(auth, (user) => {
        dispatch({
          type: ACTION_USER.CHECK_USER,
          payload: user,
        });
      });
    };
    useEffect(() => {
      checkUser();
    }, []);
  
    const authWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.log(error);
      }
    };
  
    const register = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.log(error);
      }
    };
    const sendPasswordReset = async (email) => {
      try {
        await sendPasswordResetEmail(auth, email);
        alert("Письмо для сброса пароля отправлено. Проверьте вашу почту.");
      } catch (error) {
        console.error(error);
        alert("Ошибка при отправке письма для сброса пароля.");
      }
    };
    const values = {
   authWithGoogle,
   register,
   login,
   logOut,
   user: state.user,
   sendPasswordReset,
    };
  
    return <authContext.Provider value={values}>{children}</authContext.Provider>;
  };
  
  export default AuthContextProvider;