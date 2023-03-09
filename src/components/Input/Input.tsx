import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, value, onChange }: InputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor="input-component"
          className="block mb-2 text-sm font-medium text-text"
        >
          {label}
        </label>
      )}
      <input
        className="block w-full p-3 text-sm text-text bg-background3"
        type="text"
        id="input-component"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
