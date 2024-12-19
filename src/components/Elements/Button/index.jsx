const Button = (props) => {
    const { children, variant = "bg-neutral-700"} = props;
    return (
      <button
        className={`block text-center justify-center w-full mt-1 mb-3 text-sm px-0 py-1.5  rounded-full border border-gray-500 ${variant} text-white hover:bg-white hover:text-black focus:outline-none focus:ring-0 focus:border-white  placeholder:text-sm p-1 `}
        type="submit"
      >
        {children}
      </button>
    );
};

export default Button;
