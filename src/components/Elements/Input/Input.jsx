const Input = (props) => {
    const { type, placeholder, name, value, onChange } = props;
    return (
      <input
        type={type}
        className="block justify-center items-center w-full mt-1 mb-6 text-sm px-0 py-1.5 text-left rounded-full border bg-black bg-opacity-5 border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white pl-4 placeholder:text-sm p-1 "
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    );
};

export default Input;