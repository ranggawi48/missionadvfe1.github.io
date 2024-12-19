const SectionHeader = (props) => {
  const { children } = props;
  return (
    <div className="mb-2 md:mb-5 text-left text-white">
      <h2 className="text-lg md:text-2xl font-semibold">{children}</h2>
    </div>
  );
};

export default SectionHeader;
