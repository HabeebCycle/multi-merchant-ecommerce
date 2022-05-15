import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/layout/Layout";
import Dashboard from "../../components/page/admin/Dashboard";
import Merchants from "../../components/page/admin/merchants/Merchants";

const AdminPage = ({ params }) => {
  const pageName = params.page;
  return (
    <Layout adminPage>
      {pageName === "dashboard" && <Dashboard />}
      {pageName === "merchants" && <Merchants />}
      <h1>Admin {pageName} Page</h1>
      What a lovely morning
      {/* <Button variant="contained">Habeeb</Button> */}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  return { props: { params } };
}

export default dynamic(() => Promise.resolve(AdminPage), { ssr: false });
