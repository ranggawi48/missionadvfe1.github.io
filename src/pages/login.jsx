import AuthLayouts from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import GoogleSignInButton from "../components/Elements/Button/GoogleSign";

const LoginPage = () => {
    return (
      <div className="bg-bg-login h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <AuthLayouts title="Masuk" description="Selamat datang kembali!">
          <FormLogin />
          <p className="text-center text-sm font-semibold  text-gray-400">
            Atau
          </p>
          <GoogleSignInButton>Masuk dengan Google</GoogleSignInButton>
        </AuthLayouts>
      </div>
    );
};

export default LoginPage;