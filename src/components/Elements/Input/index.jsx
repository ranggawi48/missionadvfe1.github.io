import Label from "./Label";
import Input from "./Input";
import InputPassword from "./InputPassword"; 

const InputForm = (props) => {
  const { label, type, placeholder, name, value, onChange } = props;

  return (
    <div className="input">
      <Label htmlFor={name}>{label}</Label>
      {type === "password" ? (
        <InputPassword
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputForm;
