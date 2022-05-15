import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../../components/layout/Layout";

const CommercePage = ({ params }) => {
  const pageName = params.page;
  return (
    <Layout adminPage>
      <h1>Admin {pageName} Page</h1>
      What a lovely morning
      {/* <Button variant="contained">Habeeb</Button> */}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  return { props: { params } };
}

export default dynamic(() => Promise.resolve(CommercePage), { ssr: false });
