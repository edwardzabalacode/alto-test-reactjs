import { ChangeEvent } from "react";

type Props = {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function InputHtml({ label, value, onChange }: Props) {
  return (
    <div>
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-text"
          htmlFor="textarea"
        >
          {label}
        </label>
      )}
      <textarea
        className="block w-full p-3 text-sm text-text bg-background3"
        id="textarea"
        rows={7}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
