import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {
  const { authWithGoogle, register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-form-container">
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Зарегистрироваться
        </button>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="google-sign-in"
        >
          Войти через Google
        </button>
  <p>Уже есть аккаунт? <a href="#" onClick={() => navigate('/login')}>Войти</a></p>
      </form>
    </div>
  );
};

export default Register;