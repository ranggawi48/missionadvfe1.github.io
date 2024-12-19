import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createUser = (data, callback) => {
  axios
    .post(`${API_URL}/users`, {
      username: data.username,
      password: data.password,
    })
    .then((res) => {
      console.log("Registration Response:", res);
      if (res.data.Id) {
        localStorage.setItem("userId", res.data.Id);
        callback(true, res.data);
      } else {
        callback(false, { message: "ID pengguna tidak ditemukan" });
      }
    })
    .catch((error) => {
      console.error("Registration Error:", error);
      callback(false, error.response || { message: "Registration error" });
    });
};

export const login = (data, callback) => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    callback(false, {
      message:
        "User ID tidak ditemukan. Harap mendaftar atau login terlebih dahulu.",
    });
    return;
  }

  console.log("Request Data:", data);
  axios
    .get(`${API_URL}/users/${userId}`) 
    .then((res) => {
      console.log("User Data:", res.data);
      if (
        res.data.username === data.username &&
        res.data.password === data.password
      ) {
        callback(true, { userId: res.data.Id });
      } else {
        callback(false, { message: "Login gagal. Username atau password tidak valid." });
      }
    })
    .catch((error) => {
      console.error("Error Response:", error.response);
      const errorMessage =
        error.response?.data?.message || error.message || "Login error";
      callback(false, { message: errorMessage });
    });
};

export const updateUser = (userId, data, callback = () => {}) => {
  axios
    .put(`${API_URL}/users/${userId}`, data)
    .then((res) => {
      callback(true, res);
    })
    .catch((error) => {
      callback(false, error.response || error);
    });
};

export const deleteUser = (userId, callback = () => {}) => {
  axios
    .delete(`${API_URL}/users/${userId}`)
    .then((res) => {
      callback(true, res);
    })
    .catch((error) => {
      callback(false, error.response || error);
    });
};

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error.response?.data || { message: "Unknown error occurred." };
  }
};

export const uploadProfileImage = async (imageData, callback) => {
  try {
    const formData = new FormData();
    formData.append("profileImage", imageData);

    const res = await axios.post(`${API_URL}/users/upload-profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    callback(true, res.data);
  } catch (error) {
    console.error("Error uploading profile image:", error);
    callback(false, error.response || { message: "Unknown error occurred." });
  }
};