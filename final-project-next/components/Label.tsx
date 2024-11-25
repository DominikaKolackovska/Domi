import { useContext } from "react";

type Props = {
  htmlFor: string;
  children: React.ReactNode;
};

export const Label = ({ children, htmlFor }: Props) => {
 
  return (
    <label
      className={`block text-sm font-medium leading-6 text-gray-900 ${
        theme === "dark" && "text-white"
      }`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};