import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  required
}) => {
  return (
    <div>
      <label className="block text-accent mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-primary/20 focus:border-primary/50 outline-none text-accent placeholder:text-accent/50"
      />
    </div>
  );
};

export default FormInput;