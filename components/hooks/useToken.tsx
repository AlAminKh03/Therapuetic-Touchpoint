import React, { useEffect, useState } from "react";

const useToken = (email: string) => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            const token = data.accessToken;
            localStorage.setItem("accessToken", token);
            setToken(token);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
