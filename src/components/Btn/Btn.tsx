import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Btn({ children, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`transition ease-in-out delay-100 bg-primary min-w-28 max-h-16 text-text font-semibold p-3 text-sm uppercase hover:bg-orange-700  ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}
