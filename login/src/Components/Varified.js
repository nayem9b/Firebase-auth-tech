import React, { useContext } from "react";
import { AuthContext } from "./Contexts/UserContext";

const Varified = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user && user.emailVerified ? (
        <a href='#' class='block'>
          <img alt='Art' src={user.photoURL} class='h-96 w-full object-cover' />

          <h3 class='mt-4 text-xl font-bold text-gray-900'>
            {user.displayName}
          </h3>

          <p class='mt-2 max-w-sm text-gray-700'>{user.email}</p>
        </a>
      ) : (
        <div class='relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white'>
          <div class='max-w-xl px-5 text-center'>
            <h2 class='mb-2 text-[42px] font-bold text-zinc-800'>
              Check your inbox
            </h2>
            <p class='mb-2 text-lg text-zinc-500'>
              You need to varify your email address to view this page <br />
              Check your mail folder. Don't forget to check the spam folder too{" "}
              <span class='font-medium text-indigo-500'>{user.email}</span>.
            </p>
            <a
              href='/login'
              class='mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700'>
              Open the App →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Varified;
