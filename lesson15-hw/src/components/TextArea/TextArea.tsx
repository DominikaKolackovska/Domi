import { useContext } from "react";
import { Label } from "../Label";
import { ThemeContext } from "../ThemeContext";

type Props = {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  additionalText?: string;
};

export const TextArea = ({
  label,
  name,
  handleChange,
  value,
  additionalText,
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2">
        <textarea
          id={name}
          name={name}
          rows={3}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            theme === "dark" && "bg-white/5 text-white"
          }`}
          value={value}
          onChange={handleChange}
        />
      </div>
      {additionalText && (
        <p
          className={`mt-3 text-sm leading-6 text-gray-600 ${
            theme === "dark" && "text-gray-400"
          }`}
        >
          {additionalText}
        </p>
      )}
    </>
  );
};