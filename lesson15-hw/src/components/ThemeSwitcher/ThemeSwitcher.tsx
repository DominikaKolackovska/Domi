import { Switch } from "@headlessui/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Switch
      checked={theme === "dark"}
      onChange={(value) => setTheme(value ? "dark" : "light")}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
  );
};