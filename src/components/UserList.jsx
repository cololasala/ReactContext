import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext); // especificamos que usamos el UserContext y de ahi usaremos users, getUsers y getProfile

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              <a href="#!" onClick={() => getProfile(u.id)}>
                {u.first_name} {u.last_name} {u.email}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
