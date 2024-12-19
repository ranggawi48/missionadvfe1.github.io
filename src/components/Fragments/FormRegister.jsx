import InputForm from "../Elements/Input";
import Navigation from "../Layout/Navigation";
import Button from "../Elements/Button";
import { createUser } from "../../services/apiservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [registrationFailed, setRegistrationFailed] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const navigate = useNavigate();

const handleRegister = (event) => {
  event.preventDefault();

  const data = {
    username: event.target.username.value,
    password: event.target.password.value,
    confirmPassword: event.target.confirmPassword.value,
  };

  if (data.password !== data.confirmPassword) {
    setRegistrationFailed("Kata sandi dan konfirmasi kata sandi tidak cocok.");
    setRegistrationSuccess("");
    return;
  }

  createUser(data, (status, res) => {
    if (status) {
      setRegistrationSuccess("Pendaftaran berhasil! Silakan login.");
      setRegistrationFailed("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setRegistrationFailed(res.response?.data || "Pendaftaran gagal.");
      setRegistrationSuccess("");
    }
  });
};

  return (
    <form onSubmit={handleRegister}>
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
      <InputForm
        label="Konfirmasi Kata sandi"
        name="confirmPassword"
        type="password"
        placeholder="Masukkan kata sandi"
      />
      <Navigation type="register" />
      <Button>Daftar</Button>
      {registrationFailed && (
        <p className="text-red-500 text-xs text-center mb-1">
          {registrationFailed}
        </p>
      )}
      {registrationSuccess && (
        <p className="text-green-500 text-xs text-center mb-1">
          {registrationSuccess}
        </p>
      )}
    </form>
  );
};

export default FormRegister;
