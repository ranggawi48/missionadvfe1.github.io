import FooterBrand from "./FooterBrand";
import FooterGenre from "./FooterGenre";
import FooterHelp from "./FooterHelp";

const Footer = () => (
  <footer className="bg-background py-20 border-t border-opacity-25 border-gray-200">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-10 w-full">
      <FooterBrand />
      <FooterGenre />
      <FooterHelp />
    </div>
  </footer>
);

export default Footer;
