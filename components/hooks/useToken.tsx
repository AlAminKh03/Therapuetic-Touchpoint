import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

type Props = {};

const useToken = (email: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.accessToken);
          if (data.accessToken) {
            const token = data.accessToken;
            localStorage.setItem("accessToken", token);
            setToken(token);
            Toast.fire({
              icon: "success",
              title: "Account created successfully!",
            });
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
