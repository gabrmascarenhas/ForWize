// components/MaskedInputField.jsx
import React from 'react';
import { IMaskInput } from 'react-imask'; // Importe IMaskInput

const MaskedInputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  mask,
  type = "text",
  disabled = false,
  ...rest // Captura quaisquer outras props
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <IMaskInput // Use IMaskInput aqui
        mask={mask}
        value={value}
        onAccept={(value) => onChange({ target: { name, value } })} // react-imask usa onAccept
        // onAccept é chamado quando o valor mascarado muda.
        // Adaptamos para o formato de evento que onChange espera (similar a um evento de input nativo)
        overwrite={true}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...rest} // Passe quaisquer outras props diretamente para o IMaskInput
      />
    </div>
  );
};

export default MaskedInputField;