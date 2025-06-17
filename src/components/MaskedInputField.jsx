// components/MaskedInputField.jsx
import InputMask from "react-input-mask";

const MaskedInputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  mask,
  type = "text",
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      >
        {(inputProps) => <input {...inputProps} type={type} placeholder={placeholder} />}
      </InputMask>
    </div>
  );
};

export default MaskedInputField;
