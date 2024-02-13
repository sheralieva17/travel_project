import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextProvider";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const { sendPasswordReset } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendPasswordReset(email);
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Сброс пароля</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Отправить письмо для сброса
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;