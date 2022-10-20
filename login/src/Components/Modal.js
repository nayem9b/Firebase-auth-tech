import React from "react";

const Modal = () => {
  const handleSubmit = (event) => {
    console.log(event.target.email.value);
  };
  return (
    <div>
      <a href='#my-modal-2' className=''>
        Forget Password?
      </a>
      <form onSubmit={handleSubmit}>
        <div className='modal' id='my-modal-2'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Put your email address below</h3>
            <div>
              <label
                for='UserEmail'
                class='block text-xs font-medium text-gray-700'>
                Email
              </label>

              <input
                type='email'
                id='UserEmail'
                name='email'
                placeholder='john@rhcp.com'
                class='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              />
            </div>
            <div className='modal-action'>
              <a href='#' className='btn'>
                Yay!
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
