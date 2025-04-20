import React from "react";

const Signup = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <div className="text-xs font-bold text-[#5B5FA7]">OMRONIX</div>
        <nav className="flex space-x-4">
          <button className="bg-[#5B5FA7] text-white text-xs font-semibold rounded-full px-6 py-2 hover:brightness-110 transition">
            SignUp
          </button>
          <button className="bg-[#5B5FA7] text-white text-xs font-semibold rounded-full px-6 py-2 hover:brightness-110 transition">
            Login
          </button>
        </nav>
      </header>
      <main className="flex flex-1 px-8 py-12 max-w-[1200px] mx-auto w-full">
        <section className="flex-1 max-w-[600px]">
          <img
            alt="Illustration of man standing next to large smartphone with login form and lock icon in background"
            className="w-full h-auto object-contain"
            height="300"
            width="200"
            src="../Group.png"
          />
        </section>
        <section className="flex-1 pl-12 max-w-[600px]">
          <h2 className="text-xl font-normal mb-2">Welcome to</h2>
          <h1 className="text-2xl font-extrabold text-[#5B5FA7] mb-8">Omronix</h1>
          <form className="space-y-4">
            <label className="block">
              <span className="text-[10px] font-semibold text-gray-600 mb-1 block">Email</span>
              <div className="flex items-center bg-gray-200 rounded-md px-4 py-3 text-xs font-semibold text-black">
                <i className="fas fa-envelope mr-3"></i>
                <input
                  type="email"
                  className="bg-transparent w-full outline-none"
                  defaultValue="example@gmail.com"
                  readOnly
                />
              </div>
            </label>
            <label className="block">
              <span className="text-[10px] font-semibold text-gray-600 mb-1 block">Password</span>
              <div className="flex items-center bg-gray-200 rounded-md px-4 py-3 text-xs font-semibold text-black">
                <i className="fas fa-key mr-3"></i>
                <input
                  type="password"
                  className="bg-transparent w-full outline-none"
                  defaultValue="************"
                  readOnly
                />
                <i className="fas fa-eye ml-3"></i>
              </div>
            </label>
            <label className="block">
              <span className="text-[10px] font-semibold text-gray-600 mb-1 block">Confirm Password</span>
              <div className="flex items-center bg-gray-200 rounded-md px-4 py-3 text-xs font-semibold text-black">
                <i className="fas fa-key mr-3"></i>
                <input
                  type="password"
                  className="bg-transparent w-full outline-none"
                  defaultValue="************"
                  readOnly
                />
                <i className="fas fa-eye ml-3"></i>
              </div>
            </label>
            <label className="inline-flex items-center text-xs text-gray-700">
              <input className="form-checkbox h-4 w-4 text-[#5B5FA7]" type="checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
            <button
              type="submit"
              className="w-full bg-[#5B5FA7] text-white text-xs font-semibold py-3 rounded-md mt-6"
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signup;
