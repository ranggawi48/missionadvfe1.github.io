import AuthLayouts from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import GoogleSignInButton from "../components/Elements/Button/GoogleSign";

const RegisterPage = () => {
  return (
    <div className="bg-bg-register h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <AuthLayouts title="Daftar" description="Selamat datang!">
        <FormRegister />
        <p className="text-center text-sm font-semibold  text-gray-400">Atau</p>
        <GoogleSignInButton>Daftar dengan Google</GoogleSignInButton>
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
