"use client";
import { signIn, useSession, signOut } from "next-auth/react";
const AppBar = () => {
  const session = useSession();
  return (
    <div className="flex justify-between">
      <div>Spotify</div>
      <div>
        {session.data?.user && (
          <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>
            logout
          </button>
        )}

        {!session.data?.user && (
          <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>
            signin
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
