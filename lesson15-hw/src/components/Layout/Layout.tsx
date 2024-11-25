import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ThemeProvider } from "react-jss";
import { darkTheme, lightTheme } from "../../utils/theme";
import { ThemeContext } from "../ThemeContext";
import { useState } from "react";

export const Layout = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Header />
        <main style={{ minHeight: "calc(100vh - 610px)", padding: "32px 0" }}>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};