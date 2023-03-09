import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Headline({ children }: Props) {
  return <h1 className="text-text text-xl font-extrabold">{children}</h1>;
}
