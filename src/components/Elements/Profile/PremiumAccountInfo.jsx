import React from "react";

const PremiumAccountInfo = () => {
  return (
    <div className="bg-gradient-to-br from-custom-blue-2 to-custom-blue-1 p-6 mt-4 md:mt-0 rounded-lg text-white">
      <div className="inline-block bg-white text-blue-600 px-5 py-1 rounded-full text-sm font-semibold mb-4">
        Aktif
      </div>
      <h3 className="text-lg font-semibold mb-2">Akun Premium Individual ✨</h3>
      <p className="text-sm mb-4">
        Saat ini kamu sedang menggunakan akses akun premium
      </p>
      <p className="text-xs">Berlaku hingga 31 Desember 2023</p>
    </div>
  );
};

export default PremiumAccountInfo;
