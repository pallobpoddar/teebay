import { Navigate, Outlet } from "react-router-dom";
import { GET_LOCAL_USER } from "../graphql/queries/users";
import { useQuery } from "@apollo/client";

const NonUserAuth = () => {
  const { data: user } = useQuery(GET_LOCAL_USER);

  return (
    <>
      {!user?.localUser?.id ? (
        <Outlet />
      ) : (
        <Navigate to={`/users/${user.localUser.id}/products`} />
      )}
    </>
  );
};

export default NonUserAuth;
