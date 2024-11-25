import { useContext } from "react";
import { Label } from "../Label";
import { ThemeContext } from "../ThemeContext";

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  name: string;
};

export const Select = ({
  value,
  handleChange,
  options,
  name,
  label,
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        className={`mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          theme === "dark" && "bg-white/5 text-white"
        }`}
        value={value}
        onChange={handleChange}
      >
        {options.map(({ value, label }) => (
          <option key={value} className="text-gray-900" value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};