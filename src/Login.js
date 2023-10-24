import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
  };

  return (
    <div className="section-forms">
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="form__heading">
          <h3 className="heading-primary--main">Login to SCULPTR</h3>
        </div>

        <div className="form__group">
          <input
            className="form__input"
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="username" className="form__label">
            Username
          </label>
        </div>
        <div className="form__group">
          <input
            className="form__input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="password" className="form__label">
            Password
          </label>
        </div>
        <div>
          <input className="btn btn--white" type="submit" value="Login 🙂" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
