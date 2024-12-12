import React from 'react';

interface FormTextareaProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  placeholder,
  required
}) => {
  return (
    <div>
      <label className="block text-accent mb-2">{label}</label>
      <textarea
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-primary/20 focus:border-primary/50 outline-none text-accent placeholder:text-accent/50 resize-none"
      />
    </div>
  );
};

export default FormTextarea;