import React, { useEffect, useState } from "react";

const useAdmin = (email: string) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/users/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
