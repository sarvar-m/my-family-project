import React from "react";
import Layout from "../../core/Layout";
import MainBody from "../MainBody";
import MainFooter from "../MainFooter";

function Home() {
  return (
    <Layout>
      <div className="pages">
        <MainBody />
        <MainFooter />
      </div>
    </Layout>
  );
}

export default Home;
