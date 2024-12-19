import CardInfo from "./CardInfo";
import CardButtons from "../Button/CardButtons";

const CardContent = () => {
  return (
    <div className="absolute bottom-16 left-5 right-5 md:left-10 md:right-10 lg:left-20 lg:right-20 z-20">
      <CardInfo />
      <CardButtons />
    </div>
  );
};

export default CardContent;
