


import { Navbar } from "@/components/common";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function SignUp() {
  // Replace these with your actual primary and secondary color classes or hex codes
  const primary = "bg-green-600"; // Example primary color
  // const secondary = "bg-white";   // Example secondary color
  const primaryText = "text-green-600";
  const secondaryText = "text-white";

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
    <div className="min-h-full mt-5 flex items-center justify-center bg-gray-50">
      <div className="flex flex-row gap-15 w-full max-w-4xl h-125 p-1 rounded-lg">

        {/* Left Section */}
        <div className={`flex-1 flex flex-col bg-primary items-center justify-center rounded-sm p-5 ${primary}  justify-between w-1/3 h-full gap-20 pt-30`}>
          <div className="firstDesc flex flex-col gap-20">
            <div className="firDesc1">
              <h2 className={`text-2xl font-bold ${secondaryText} text-left w-80 mb-6`}>The simplest way to get suitable jobs</h2>
              <p className="enterDetails text-xs text-white">Enter your details to access your account</p>
            </div>

            <div className="userPosted w-70 gap-10 flex flex-col">
              <img src='./src/assets/userCourage.jpg' alt="User profile" className="h-10 w-10 rounded-4xl" />
              <p className="text-white text-2xs w-80">“EaseJob helped me land verified jobs faster than anywhere else. It felt safe, simple, and real.”</p>

              <div className="userRole pb-20">
                <p className="text-white font-semibold text-xs">Paul M. Nwodo</p>
                <p className="text-white text-xs">Software Developer</p>
              </div>
            </div>
          </div>

          <div className="dits">
            <FontAwesomeIcon icon={"faUser"} className={`text-sm mr-2`} />
          </div>

        </div>

        {/* Right Section */}
        <div className={`flex-1 flex rounded-lg  flex flex-col justify-center p-5 pt-0 gap-2 w-2/2 h-full box-border`}>
          <div className="form-top">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center font-bold mt-xs">Create an account</h2>
          <p className="text-gray-600 text-center">
            Already have an account?
            <a href="/Authentication2" className={`${primaryText} hover:underline`}>
              Login
            </a>
          </p>
          </div>
          <form action="submit" className="flex flex-col justify-center w-100 h-1/3 box-center box-border m-auto">
            <label htmlFor="Fullname" className="text-sm mb-">Full Name</label><br />
            <input type="text" id="Fullname" placeholder="Full Name" className="border p-1 mb-4 rounded box-border" /><br />

            <label htmlFor="email">Email</label><br />
            <input type="text" id="email" placeholder="Email" className="border p-1 mb-1 rounded box-border" /><br />

            <label htmlFor="Password">Password</label><br />
            <input type="password" id="Password" placeholder="Password" className="border p-1 mb-1 rounded w-100 box-border" /><br />
            <label htmlFor="terms" className="flex items-center mb-4 text-xs">
              <input type="checkbox" id="terms" className="mr-2" />
              I agree to the &nbsp;
              <a href="/terms" className="text-secondary hover:underline">terms</a> &nbsp;
               and &nbsp;
              <a href="/conditions" className="text-secondary hover:underline">conditions</a>
            </label>
            <button type="submit" className={`py-2 px-4 rounded ${primary} ${primaryText} bg-primary font-bold text-white`}>
              Sign Up
            </button>
            <div className="downSection w-full flex flex-col m-3 box-border box-center bg-blue-100  items-center">
              <p className="flex text-center text-sm">or</p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
