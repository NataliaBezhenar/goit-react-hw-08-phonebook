import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import "./viewStyles.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">create account</h1>

      <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
        <label className="contact-label">
          Name
          <input
            type="text"
            className="contact-input"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="contact-label">
          e-mail
          <input
            className="contact-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="contact-label">
          Password
          <input
            className="contact-input"
            type="password"
            name="password"
            value={password}
            autoComplete="on"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="button">
          sign up
        </button>
      </form>
    </div>
  );
}
