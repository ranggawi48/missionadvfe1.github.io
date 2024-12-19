import { Link } from "react-router-dom";

const Navigation = ({ type }) => {
  return (
    <div className="flex justify-between items-center mb-7">
      <p className="text-gray-400 text-xs sm:text-sm text-left">
        {type === "login" ? (
          <>
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="text-white font-semibold no-underline hover:underline"
            >
              Daftar
            </Link>
          </>
        ) : (
          <>
            Sudah punya akun?{" "}
            <Link
              to="/"
              className="text-white font-semibold no-underline hover:underline"
            >
              Masuk
            </Link>
          </>
        )}
      </p>
      {type === "login" && (
        <div className="text-white text-xs sm:text-sm text-right">
          <Link
            to="#"
            className="text-white font-semibold no-underline hover:underline"
          >
            Lupa kata sandi?
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
