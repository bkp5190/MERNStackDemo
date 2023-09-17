import React from "react";
import { useKeycloak } from "@react-keycloak/web";

function Profile() {
  const { keycloak, initialized } = useKeycloak();

  // Check if Keycloak is initialized before trying to access user data
  if (!initialized || !keycloak.authenticated) {
    return <div>Loading...</div>;
  }

  // Access JWT attributes from the user's token using optional chaining
  const { idTokenParsed } = keycloak || {};

    console.log(idTokenParsed);
    console.log(keycloak.tokenParsed);
  // Check if idTokenParsed exists before accessing its properties
  const username = idTokenParsed?.preferred_username || "N/A";
  const email = idTokenParsed?.email || "N/A";

  return (
    <div>
      <h2>JWT Token</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Profile;
