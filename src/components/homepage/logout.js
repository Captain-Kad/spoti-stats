import React from "react";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Logout = () => {
  const handleLogout = () => {
    // Clear token from local storage
    window.localStorage.removeItem("token");
    // Reload the page to handle the logout and render Login component
    window.location.reload();
  };

  return (
    <Button className="btn btn-lg" onClick={handleLogout}>
      LOGOUT
    </Button>
  );
};

export default Logout;

const Button = styled.button`
  color: rgb(232, 230, 227);
  :hover {
    border-color: rgb(48, 52, 54);
    background-color: rgb(48, 52, 54);
  }
  font-weight: 700;
  padding: 15px;
  background-color: transparent;
  border-color: rgb(48, 52, 54);
  border-radius: 99px;
  width: 10%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
