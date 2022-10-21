import React, { useContext, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./Contexts/UserContext";
import Modal from "./Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const [fire, setFire] = useState("");
  const { signInWithGoogle, fbSignIn, signIn, githubSignin } =
    useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/profile");
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (errorEmail) {
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/profile");
        })
        .catch((error) => console.log(error));
      form.reset();
      setErrorEmail("");
    }
  };

  const handleEmailCheck = (event) => {
    setEmail(event.target.value);

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail("Cheack your email please");
    } else {
      setErrorEmail("Email is alright");
    }
  };

  const handleFbLogin = () => {
    fbSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogin = () => {
    githubSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div onChange={handleEmailCheck} className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    className='input input-bordered max-h-max'
                    name='email'
                  />
                </div>
                <div className='mt-[-25px]'>
                  {errorEmail === "Email is alright" ? (
                    <>
                      <div
                        className='tooltip tooltip-open tooltip-bottom tooltip-success'
                        data-tip={errorEmail}></div>
                    </>
                  ) : (
                    <div
                      className='tooltip tooltip-open tooltip-bottom tooltip-error'
                      data-tip={errorEmail}></div>
                  )}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                    name='password'
                  />
                </div>
                <label className='label'>
                  <Modal></Modal>
                </label>
                <div className=''>
                  <button class='group relative inline-block focus:outline-none focus:ring'>
                    <span class='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0'></span>

                    <span class='relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75'>
                      Log In
                    </span>
                  </button>
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
                  onClick={handleGithubLogin}
                  class='inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
                  rel='noreferrer'
                  target='_blank'>
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
                <GoogleButton
                  className='flex mx-auto ml-10'
                  onClick={handleGoogleSignIn}></GoogleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
