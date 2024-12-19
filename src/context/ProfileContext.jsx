import React, { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState("/icon/user-1.jpg");
  const [userId, setUserId] = useState(null);

  const loadProfileImageFromLocalStorage = () => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      const storedProfileImage = localStorage.getItem(
        `profileImage_${storedUserId}`
      );
      if (storedProfileImage) {
        setProfileImage(storedProfileImage);
      }
    }
  };

  const fetchProfileImage = () => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      const storedProfileImage = localStorage.getItem(
        `profileImage_${storedUserId}`
      );
      if (storedProfileImage) {
        setProfileImage(storedProfileImage);
      }
    }
  };
  const updateProfileImage = (newImage) => {
    try {
      if (!userId) return;

      localStorage.setItem(`profileImage_${userId}`, newImage);
      setProfileImage(newImage);
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
    loadProfileImageFromLocalStorage();
  }, []);

  const value = {
    profileImage,
    fetchProfileImage,
    updateProfileImage,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
