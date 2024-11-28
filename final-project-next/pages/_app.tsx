import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <main style={{
      minHeight: "calc(100vh - 610px)",padding: "32px 0",}}>
        <Component {...pageProps} />
    </main>
    </>
  )
}
