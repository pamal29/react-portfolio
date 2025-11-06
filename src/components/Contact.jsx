import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <form className="flex flex-col gap-6 w-full max-w-[380px] bg-black m-8 p-8 border-4 border-white rounded-2xl">
        <p className="text-[28px] text-white font-semibold relative flex items-center pl-8">
          Connect with Me
          <span className="absolute left-0 h-[18px] w-[18px] rounded-full bg-blue-600 animate-ping-slow"></span>
        </p>


       
        <div className="flex gap-2 w-full">
          <label className="relative w-full">
            <input
              required
              type="text"
              className="peer w-full p-2 pt-3 border border-white rounded-lg outline-none focus:border-blue-500"
            />
            <span className="absolute left-3 top-3 text-black text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:top-6 peer-valid:text-xs peer-valid:font-semibold peer-valid:text-green-600">
              Firstname
            </span>
          </label>

          <label className="relative w-full">
            <input
              required
              type="text"
              className="peer w-full p-2 pt-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
            />
            <span className="absolute left-3 top-3 text-black text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:top-6 peer-valid:text-xs peer-valid:font-semibold peer-valid:text-green-600">
              Lastname
            </span>
          </label>
        </div>

        {/* Email */}
        <label className="relative">
          <input
            required
            type="email"
            className="peer w-full p-2 pt-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
          <span className="absolute left-3 top-3 text-black text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:top-6 peer-valid:text-xs peer-valid:font-semibold peer-valid:text-green-600">
            Email
          </span>
        </label>

         <label className="relative">
          <input
            required
            type="text"
            className="peer w-full p-2 pt-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 h-40"
          />
          <span className="absolute left-3 top-3 text-black text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:top-6 peer-valid:text-xs peer-valid:font-semibold peer-valid:text-green-600">
            Message
          </span>
        </label>


        {/* Submit Button */}
        <button className="outline-none bg-black text-white border-4 border-white py-2 rounded-lg text-[16px] transition">
          Submit
        </button>

        {/* Sign-in Text */}
        <p className="text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Signin
          </a>
        </p>
      </form>
    </div>
  );
};


