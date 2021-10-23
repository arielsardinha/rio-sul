import { useEffect } from "react";
import "@styles/globals.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
