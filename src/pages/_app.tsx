import { AnimatePresence } from "framer-motion";

import "@/styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
