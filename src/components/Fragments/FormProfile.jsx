import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/InputProfile";
import { updateUser, deleteUser, getUser } from "../../services/apiservice";

const FormEdit = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userIdFromLocalStorage = localStorage.getItem("userId");
      if (userIdFromLocalStorage) {
        setUserId(userIdFromLocalStorage);
        try {
          const userData = await getUser(userIdFromLocalStorage); // Mengambil data pengguna
          const { username, email, password } = userData;
          setFormData({ username, email, password });
        } catch (err) {
          setError(err.message || "Failed to fetch user data.");
        }
      } else {
        setError("User ID not found. Please log in again.");
      }
    };

    fetchUserData();
  }, []);

const handleUpdate = async (event) => {
  event.preventDefault();
  if (!userId) {
    setError("User ID not found.");
    return;
  }

  try {
    await updateUser(userId, formData);
    setSuccess("Profile updated successfully!");
    setError("");

    setTimeout(() => {
      window.location.reload();
    }, 1000); 
  } catch (err) {
    setError(err.message || "Failed to update profile.");
    setSuccess("");
  }
};

const handleDelete = async (event) => {
  event.preventDefault();
  if (!userId) {
    setError("User ID not found.");
    return;
  }

  try {
    await deleteUser(userId);
    setSuccess("Akun berhasil dihapus.");
    
    setError("");
    
    setTimeout(() => {
      localStorage.removeItem("userId");
      localStorage.removeItem(`profileImage_${userId}`);
      navigate("/");
    }, 2000);
  } catch (err) {
    setError(err.message || "Gagal menghapus akun.");
    setSuccess("");
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleUpdate}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="flex gap-4 mt-1">
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-blue-800 hover:text-white mb-2 z-10"
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-red-800 hover:text-white mb-2 z-10"
        >
          Hapus
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-xs text-center mb-1">{error}</p>
      )}
      {success && (
        <p className="text-green-500 text-xs text-center mb-1">{success}</p>
      )}
    </form>
  );
};

export default FormEdit;
