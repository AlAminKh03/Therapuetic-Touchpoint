import Link from "next/link";
import React from "react";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import NestedRoutingNav from "../../components/PrivateRoute/NestedRoutingNav";
import { useQuery } from "@tanstack/react-query";
import { MdHealthAndSafety } from "react-icons/md";
import AdminRoute from "../../components/PrivateRoute/AdminRoute";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

interface UserProps {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const dashboard3 = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await fetch("http://localhost:8000/users");
      const data = await users.json();
      return data;
    },
  });
  const handleRole = (id: string) => {
    fetch(`http://localhost:8000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    refetch();
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[100px] h-[100px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }
  return (
    <PrivateRoute>
      <AdminRoute>
        <div className="relative top-20">
          <NestedRoutingNav />

          <div>
            <div className="overflow-x-auto">
              <table className="table w-full mx-auto my-5">
                <thead className="bg-gray-400">
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2"> Name</th>
                    <th className="px-4 py-2">email</th>
                    <th className="px-4 py-2">role</th>
                    <th className="px-4 py-2">action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: UserProps, i: number) => {
                    return (
                      <React.Fragment key={user._id}>
                        <tr className="border text-center">
                          <th className="border px-4 py-2">{i + 1}</th>
                          <td className="border px-4 py-2">{user.name}</td>
                          <td className="border px-4 py-2">{user.email}</td>
                          <td className="border px-4 py-2">
                            {user.role ? (
                              <p className="text-gray-500 text-xs">ADMIN</p>
                            ) : (
                              <button
                                className="border border-green-500 rounded-full bg-green-500 p-1 text-white text-xs"
                                onClick={() => handleRole(user._id)}
                              >
                                make admin
                              </button>
                            )}
                          </td>
                          <td className="border px-4 py-2">
                            <button className="border border-red-500 rounded-full bg-red-500 p-1 text-white text-xs">
                              delete
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminRoute>
    </PrivateRoute>
  );
};
export default dashboard3;
