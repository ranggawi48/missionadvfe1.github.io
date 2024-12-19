import React, { useState, useEffect } from "react";
import { MdUploadFile } from "react-icons/md";

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState("/icon/user-1.jpg"); 
  const [isUploading, setIsUploading] = useState(false); 

  const loadProfileImage = () => {
    const userId = localStorage.getItem("userId"); 
    if (userId) {
      const savedImage = localStorage.getItem(`profileImage_${userId}`);
      if (savedImage) {
        setProfileImage(savedImage);
      }
    }
  };

  useEffect(() => {
    loadProfileImage();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setIsUploading(true); 

      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;

        const userId = localStorage.getItem("userId");
        if (userId) {
          localStorage.setItem(`profileImage_${userId}`, imageUrl);
          setProfileImage(imageUrl);
        } else {
          alert("User ID tidak ditemukan. Silakan login terlebih dahulu.");
        }
      };

      reader.readAsDataURL(file);
    } else {
      alert("Ukuran file terlalu besar. Maksimal 2MB.");
    }
  };

  return (
    <div className="text-left mb-6">
      <div className="flex items-center gap-10">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 md:w-32 md:h-32 rounded-full"
        />
        <div className="flex flex-col items-start">
          <label
            htmlFor="upload"
            className="bg-transparent border border-blue-500 text-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-blue-700 hover:text-white mb-2 cursor-pointer"
          >
            {isUploading ? "Uploading..." : "Ubah Foto"}
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <div className="flex items-center text-xs md:text-sm text-gray-400">
            <MdUploadFile className="mr-2 text-gray-500" />
            Maksimal 2MB
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
