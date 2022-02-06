import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import "./viewStyles.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Login</h1>

      <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
        <label className="contact-label">
          e-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="contact-input"
          />
        </label>

        <label className="contact-label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            autoComplete="on"
            onChange={handleChange}
            className="contact-input"
          />
        </label>

        <button className="button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
