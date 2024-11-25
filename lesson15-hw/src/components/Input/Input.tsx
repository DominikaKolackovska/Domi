import { useContext } from "react";
import { Label } from "../Label";
import { ThemeContext } from "../ThemeContext";

type Props = {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
};

export const Input = ({
  value,
  handleChange,
  name,
  label,
  placeholder,
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            id={name}
            name={name}
            type="text"
            placeholder={placeholder}
            className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${
              theme === "dark" && "bg-white/5 text-white"
            }`}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
