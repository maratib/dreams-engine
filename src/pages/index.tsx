import React from "react";
import Layout from "@/components/Layout";
import Home from "@/components/Home";

const HomePage: React.FC = () => {
  return (
    <>
      <Layout title="Home | DreamsEngine.io">
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
