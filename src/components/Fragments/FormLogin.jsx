import InputForm from "../Elements/Input";
import Navigation from "../Layout/Navigation";
import Button from "../Elements/Button";
import { login } from "../../services/apiservice";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
const handleLogin = (event) => {
  event.preventDefault();

  const data = {
    username: event.target.username.value,
    password: event.target.password.value,
  };

  login(data, (status, res) => {
    if (status) {
      window.location.href = "/home";
    } else {
      setLoginFailed(res.message || "Login gagal.");
    }
  });
};

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan username"
      />
      <InputForm
        label="Kata sandi"
        name="password"
        type="password"
        placeholder="Masukkan kata sandi"
      />
      <Navigation type="login" />
      <Button>Login</Button>
      {loginFailed && (
        <p className="text-red-500 text-xs text-center mb-1">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
