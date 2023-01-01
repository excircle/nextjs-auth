import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const imgClass = "py-2"

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <p>Your Email: {session.user.email}</p>
        <p>Your Profile Pic:</p>
        <img className={imgClass} src={session.user.image}  alt="User Logo" />
        <div className="py-2">
        <button className={buttonClass} onClick={() => signOut()}>
          Sign Out
        </button>
        </div>
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
