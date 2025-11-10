import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { signInWithGoogle } = useAuth();

  return (
    <div style={{ display:"grid", placeItems:"center", height:"100vh" }}>
      <div style={{ textAlign:"center" }}>
        <h2>Sign in</h2>
        <button onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
