import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { AuthContext } from "./Contexts/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return <h1>This is my profile</h1>;
};

export default Profile;
