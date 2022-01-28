import React from "react";
import Head from "next/head";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  title: string;
  hasNavigation?: boolean;
  logoAsIcon?: boolean;
  isFooterDark?: boolean;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: -200 },
};

const Layout: React.FC<Props> = ({
  title,
  hasNavigation = true,
  children,
  logoAsIcon,
  isFooterDark,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <title>{title}</title>
      </Head>

      {hasNavigation && <Header logoAsIcon={logoAsIcon} />}

      <React.Fragment key={router.pathname}>
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="w-full h-full"
        >
          {children}
        </motion.main>
      </React.Fragment>

      {hasNavigation && <Footer isFooterDark={isFooterDark} />}
    </>
  );
};

export default Layout;
