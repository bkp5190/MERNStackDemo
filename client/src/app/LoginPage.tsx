import React from "react";
import { useKeycloak } from "@react-keycloak/web";

function LoginPage() {
  const { keycloak } = useKeycloak();

  const handleLogin = async () => {
    try {
    const redirectUri = `${window.location.origin}/`;
    await keycloak.login({ redirectUri });
    } catch (error) {
      console.error("Failed to log in", error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {keycloak.authenticated ? (
        <div>
          <p>You are logged in as {keycloak.tokenParsed?.preferred_username}</p>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
