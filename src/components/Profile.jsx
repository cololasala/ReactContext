import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Profile = () => {
  const { selectedUser } = useContext(UserContext); // especificamos que usamos el UserContext y que usaremos selectedUser

  return (
    <>
      {selectedUser ? (
        <h2>
          {selectedUser.first_name} {" "}
          {selectedUser.last_name} {" "}
          {selectedUser.email}
        </h2>
      ) : (
       <h2>No selected user</h2> 
      )}
    </>
  );
};
