import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <button className={buttonClass} onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button className={buttonClass} onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    );
  }
};

export default login;
