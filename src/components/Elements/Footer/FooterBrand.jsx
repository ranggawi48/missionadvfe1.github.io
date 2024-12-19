import logo from "../../../assets/logo.png";

const FooterBrand = () => (
  <div className="flex flex-col items-start md:mr-10">
    <img src={logo} className="w-24 md:w-36 mb-2" alt="Chill Logo" />
    <p className="text-xs text-white mb-8 md:mb-0">@2023 Chill All Rights Reserved.</p>
  </div>
);

export default FooterBrand;
