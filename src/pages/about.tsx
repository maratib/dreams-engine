import React from "react";
import Layout from "@/components/Layout";
import About from "@/components/About";

const AboutPage: React.FC = () => {
  return (
    <>
      <Layout title="About | DreamsEngine.io" logoAsIcon isFooterDark>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;
