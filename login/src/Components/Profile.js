import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { AuthContext } from "./Contexts/UserContext";
import image from "../Images/image.jpg";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div class='relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'>
        <div class='px-6'>
          <div class='flex flex-wrap justify-center'>
            <div class='w-full flex justify-center'>
              <div class='relative'>
                {user.emailVerified ? (
                  <>
                    <img className='rounded-full' src={user.photoURL} />
                  </>
                ) : (
                  <img src={image} />
                )}
              </div>
            </div>
          </div>
          <div class='text-center mt-2'>
            <h3 class='text-2xl text-slate-700 font-bold leading-normal mb-1'>
              {user.displayName ? (
                user.displayName
              ) : (
                <>
                  {" "}
                  <h1>Default User</h1>
                </>
              )}
            </h3>
            {user.metadata.lastSignInTime === user.metadata.creationTime ? (
              <div class='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                Account Created at :
                <i class=' mr-2 text-slate-400 opacity-75'></i>
                {user.metadata.creationTime}
              </div>
            ) : (
              <div class='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                Signed in at :<i class=' mr-2 text-slate-400 opacity-75'></i>
                {user.metadata.lastSignInTime}
              </div>
            )}
          </div>
          <div class='mt-6 py-6 border-t border-slate-200 text-center'>
            <div class='flex flex-wrap justify-center'>
              <div class='w-full px-4'>
                <p class='font-light leading-relaxed text-slate-600 mb-4'>
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class='relative pt-6 pb-2 mt-6'>
        <div class='container mx-auto px-4'>
          <div class='flex flex-wrap items-center md:justify-between justify-center'>
            <div class='w-full md:w-6/12 px-4 mx-auto text-center'></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
