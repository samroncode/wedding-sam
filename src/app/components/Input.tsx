"use client";

import { InputHTMLAttributes, useState } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  rows?: number;
  type?: "text" | "textarea" | "tel" | "email";
  errorMessage?: string;
  validator?: (text: any, min?: number, max?: number) => any;
}

const Input = ({
  value,
  type,
  label,
  placeholder,
  errorMessage,
  onChange,
  onBlur,
  validator,
  id,
  name,
  required,
  rows,
  disabled,
  ...rest
}: InputProps) => {
  const [invalid, setInvalid] = useState<boolean>(false);
  const InputType = type === "textarea" ? "textarea" : "input";

  const validateField = () => {
    let invalid = false;

    if (!validator || !required) {
      return;
    }

    if (!value) {
      invalid = true;
    }

    if (validator && value) {
      invalid = !validator(value);
    }

    setInvalid(invalid);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-semibold leading-6 text-gray-900"
      >
        {name}
      </label>
      <div className="mt-2.5">
        <InputType
          required
          type="text"
          name={id}
          id={id}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-branch sm:text-md sm:leading-6"
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={validateField}
          {...rest}
        />
        {invalid && (
          <span className="inline-block text-orange-600 text-sm pt-2 pl-3">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
