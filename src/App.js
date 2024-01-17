import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { validator } from "validator";

function App() {
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSignUpInput({
      ...signUpInput,
      [e.target.name]: e.target.value,
    });
  };
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleClick = (e) => {
    e.preventDefault();
    if (!signUpInput.email.match(validRegex)) {
      return setError("the email you input is invalid");
    }
  };
  console.log(signUpInput);
  return (
    <div className="container my-5">
      <form>
        <div className="mb-5">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={signUpInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="password"
            className="form-control"
            value={signUpInput.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="confirm password" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm password"
            name="confirmPassword"
            className="form-control"
            value={signUpInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button
          type="submit"
          name="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
