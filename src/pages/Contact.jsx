import React from 'react';
import{   Button} from "@material-tailwind/react";
const Contact = () => {
  return (
 <>
    <span className='mt-20 text-3xl text-purple-400 flex justify-center font-semibold'> Contact Us</span> 
    <form className="w-full max-h-full  mx-auto p-10 bg-white shadow-md rounded-lg mt-5">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Ace" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="ace@example.com" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="Write your message here..."></textarea>
        </div>
      </div>
      <div className="flex items-center justify-between">
      <Button variant="gradient" color="purple" fullWidth>
            Sign In
          </Button>
      </div>
    </form>

    </>
  );
}

export default Contact;
