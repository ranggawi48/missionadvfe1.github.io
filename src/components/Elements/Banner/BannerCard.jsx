import CardContent from "./CardContent";

const BannerCard = () => {
  return (
    <div className="relative h-56 md:h-[700px] overflow-hidden cursor-pointer mb-2 md:mb-0">
      <img
        src="/images/drama-korea-duty-after-school.jpg"
        alt="Duty After School"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18181d] z-10 pointer-events-none"></div>
      <CardContent />
    </div>
  );
};

export default BannerCard;
