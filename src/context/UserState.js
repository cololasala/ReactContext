// este es nuestro componente que tiene nuestro reducer y metodos para actualizar el reducer
// utiliza el Provider y el value para pasar a los componentes hijos nuestro Context y asi lo pueda usar
import { useReducer } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { UserReducer } from "./UserReducer";

const initialState = {
  users: [],
  selectedUser: null,
};

export const UserState = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    dispatch({
      // actualizo el state pasando el action y el payload a mi UserReducer
      type: "GET_USERS",
      payload: response.data.data,
    });
  };

  const getProfile = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);

    dispatch({
      type: "GET_PROFILE",
      payload: response.data.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers: getUsers,
        getProfile: getProfile,
      }}
    >
      {props.children} {/* Cada uno de los componentes hijos */}
    </UserContext.Provider>
  );
};
