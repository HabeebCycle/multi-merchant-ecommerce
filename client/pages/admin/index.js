import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  //return router.push("/admin/dashboard");

  useEffect(() => {
    return router.push("/admin/dashboard");
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      What a lovely morning
      {/* <Button variant="contained">Habeeb</Button> */}
    </div>
  );
};

export default Admin;
