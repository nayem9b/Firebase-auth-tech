import React, { useContext, useState } from "react";
import GoogleButton from "react-google-button";
import { AuthContext } from "./Contexts/UserContext";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { signInWithGoogle, createUser, fbSignIn, verifyEmail } =
    useContext(AuthContext);
  const notify = () => toast("Here is your toast.");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [cofirmPassword, setConfirmPassword] = useState("");
  const [finalPassword, setFinalPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState("");

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleFbLogin = () => {
    fbSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  // const handleConfirm = (event) => {
  //   const form = event.target;
  //   console.log(form);
  //   const password = form.password.value;
  //   const confirm = form.confirm.value;
  //   if (password !== confirm) {
  //     console.log("password didnt match");
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password === confirm) {
      toast.success("Verification email has been sent to your email address");
      createUser(email, password)
        .then((result) => {
          const user = result.user;

          console.log(user);
          form.reset();
          navigate("/home");
          verifyEmail().then(() => {
            console.log("email varification sent");
          });
        })
        .catch((error) => console.error(error));
      form.reset();
    }

    if (password !== confirm) {
      toast.error("Password didn't match");
    }

    // verifyEmail()
    //   .then(() => {
    //     console.log("email varification sent");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };
  const handleEmailCheck = (event) => {
    console.log(event.target.value);
    const emailCheck = /\S+@\S+\.\S+/.test(event.target.value);

    if (!emailCheck) {
      setErrorEmail("Cheack your email please");
      console.log(errorEmail);
    }
  };
  const handlePassword = (e) => {
    setFinalPassword(e.target.value);
    console.log(finalPassword);
    if (!/(?=.{8,})/.test(e.target.value)) {
      setError("password must be 8 character");
      setFinalPassword(e.target.value);
      return console.log(error, finalPassword);
    }
    if (!/(?=.*[A-Z])/.test(e.target.value)) {
      setError("password should have Upper letter!!");
      setFinalPassword(e.target.value);
      return console.log(error, finalPassword);
    }
    if (!/(?=.*[!#@$%&? "])/.test(e.target.value)) {
      setError("password should have special character!!");
      setFinalPassword(e.target.value);
      return console.log(error, finalPassword);
    } else {
      setError("Password is strong");
    }
  };
  const handleCheckBothPassword = (e) => {
    if (e.target.value === finalPassword) {
      setConfirmPassword("Password Matched");
      console.log(cofirmPassword);
    } else {
      setConfirmPassword("Password didn't match");
    }
  };
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Username</span>
                  </label>
                  <input
                    type='text'
                    placeholder='username'
                    className='input input-bordered'
                    name='user'
                    required
                  />
                </div>
                <div onChange={handleEmailCheck} className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>{" "}
                  <input
                    type='email'
                    placeholder='email'
                    className='input input-bordered max-h-max'
                    name='email'
                  />
                </div>
                <div
                  className='tooltip tooltip-open tooltip-bottom tooltip-error'
                  data-tip={errorEmail}></div>

                <div onChange={handlePassword} className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                    name='password'
                    required
                  />
                </div>
                <div className='mt-[-25px]'>
                  {error === "Password is strong" ? (
                    <>
                      {" "}
                      <div
                        className=' tooltip tooltip-open tooltip-success tooltip-bottom'
                        data-tip={error}></div>{" "}
                    </>
                  ) : (
                    <div
                      className='tooltip tooltip-open tooltip-bottom tooltip-error'
                      data-tip={error}></div>
                  )}
                </div>

                {/* <div
                  className='tooltip tooltip-open tooltip-bottom'
                  data-tip={error}></div> */}

                <div
                  onChange={handleCheckBothPassword}
                  className='form-control mt-5'>
                  <label className='label'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    className='input input-bordered'
                    name='confirm'
                    required
                  />
                </div>

                <div className=''>
                  {cofirmPassword === "Password Matched" ? (
                    <>
                      <div
                        className=' mt-[-15px] mb-7 tooltip tooltip-open tooltip-bottom tooltip-success'
                        data-tip={cofirmPassword}></div>
                    </>
                  ) : (
                    <>
                      <div
                        className='mt-[-15px] mb-7 tooltip tooltip-open tooltip-bottom tooltip-error'
                        data-tip={cofirmPassword}></div>
                    </>
                  )}
                </div>

                {/* <div
                  className='tooltip tooltip-open tooltip-bottom tooltip-success'
                  data-tip={cofirmPassword}></div> */}
                <div className='mt-4 flex'>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-green-400" : "bg-red-400"}
          relative inline-flex h-[18px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                    <span className='sr-only'>Use setting</span>
                    <span
                      aria-hidden='true'
                      className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  <h1>Accept terms and policy</h1>
                </div>
                <div className='form-control mt-3'>
                  <button className='btn btn-primary ' disabled={!enabled}>
                    Register
                  </button>
                  <Toaster />
                </div>
              </form>

              <div className='grid grid-cols-2 gap-y-3 gap-x-4'>
                <a
                  onClick={handleFbLogin}
                  class='inline-flex items-center rounded border-2 border-[#3b5998] bg-[#3b5998] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75'
                  target='_blank'
                  rel='noreferrer'>
                  Facebook
                  <svg
                    class='ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z' />
                  </svg>
                </a>
                <a
                  class='inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
                  href='/github'
                  target='_blank'
                  rel='noreferrer'
                  disabled={!enabled}>
                  GitHub
                  <svg
                    class='ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clip-rule='evenodd'></path>
                  </svg>
                </a>
                <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
