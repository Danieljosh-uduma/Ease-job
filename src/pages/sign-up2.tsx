


import { Navbar } from "@/components/common";
import { useState } from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function SignUp() {
  // Replace these with your actual primary and secondary color classes or hex codes
  const primary = "bg-green-600"; // Example primary color
  // const secondary = "bg-white";   // Example secondary color
  const primaryText = "text-green-600";
  const secondaryText = "text-white";

  const [showPassword, setShowPassword] = useState(false);

  // set the page title
  document.title = "Sign-up - EaseJob";
  // set the loading state
  const [loading, setLoading] = useState(false);
  if (loading) {
    // set loading to true
    setLoading(true);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="flex m-auto loading ta-center text-bold text-white w-400 bg-primary p-5">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-15 w-full max-w-5xl h-auto p-1 rounded-lg items-center m-auto mt-10 box-border">

        {/* Left Section */}
        <div className="flex-1 flex flex-col bg-primary items-center justify-center rounded-sm p-5  justify-between h-full gap-20 pt-15 pb-15 box-border max-w-md sm:hidden xs:hidden">
          <div className="firstDesc flex flex-col gap-20">
            <div className="firDesc1">
              <h2 className={`text-2xl font-bold ${secondaryText} text-left w-80 mb-6`}>The simplest way to get suitable jobs</h2>
              <p className="enterDetails text-xs text-white">Enter your details to access your account</p>
            </div>

            <div className="userPosted w-70 gap-7 flex flex-col">
              <img src='./src/assets/userCourage.jpg' alt="User profile" className="h-10 w-10 rounded-4xl" />
              <p className="text-white text-2xs w-80">“EaseJob helped me land verified jobs faster than anywhere else. It felt safe, simple, and real.”</p>

              <div className="treack bg-green-600">
                <p className="text-white font-semibold text-xs">Paul M. Nwodo</p>
                <p className="text-white text-xs">Software Developer</p>
              </div>
            </div>
            <div className="dots">
              <h1>hello world</h1>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={`flex-1 flex rounded-lg  flex flex-col justify-center p-5 pt-0 gap-2 min-w-100 h-full box-border`}>
          <div className="form-top mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center font-bold mt-xs">Create an account</h2>
            <p className="text-gray-600 text-center">
            Already have an account?
            <a href="/Authentication2" className={`${primaryText} hover:underline ml-1`}>
              Login
            </a>
            </p>
          </div>
          <form action="submit" className="flex flex-col justify-center w-full h-auto box-center box-border m-auto">
            <label htmlFor="Fullname" className="text-md mb-">Full Name</label>
            <input type="text" id="Fullname" placeholder="Enter your full Name" className="border p-1 mb-4 rounded box-border mb-7 text-sm text-gray-220" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" className="border p-1 mb-1 rounded box-border mb-7" />

            <label htmlFor="Password">Password</label>
            <input type={showPassword ? "text" : "password"}
            placeholder="*********"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="flex items-center mb-4 text-xs">
              <input type="checkbox" id="terms" className="mr-2 my-5" />
              I agree to the &nbsp; 
              <a href="/terms" className="text-secondary hover:underline">terms</a> &nbsp;
               and &nbsp;
              <a href="/conditions" className="text-secondary hover:underline">conditions</a>
            </label>
            <button type="submit" className={`py-2 text-20 rounded ${primary} ${primaryText} bg-primary font-md hover:bg-secondary text-white`}>
              Sign Up
            </button>
            <div className="downSection w-full flex flex-col mt-7 box-border box-center  items-center gap-10">
              <p className="flex text-center text-sm">or</p>
            
              <div className="horizontal flex items-center w-full box-border box-center gap-5">
                <div className=" border-b border-black  border-1 w-150 bg-gray-300"/>
                <p className="continueWith w-150 text-center text-sm ">Continue with</p>
                <div className=" border-b border-black  border-1 w-150 bg-gray-300"/>
              </div>

              <div className="signupSocials w-full flex justify-between px-2">
                <div className="google w-50 text-center border-1 rounded-[100px] border-gray-600 hover:bg-blue-100 hover:border-2">Google</div>
                <div className="facebook w-50 text-center border-1 rounded-[100px] border-gray-600 hover:bg-blue-100 hover:border-2">Facebook</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
