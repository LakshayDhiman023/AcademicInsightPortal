import React, { useState } from "react";
import Axios from "axios";
function Login() {
  const [user, setUser] = useState("Student");

  const changeUser = () => {
    // console.log("hello");
    if (user === "Student") setUser("Admin");
    else setUser("Student");
  };

  const [userData, setUserData] = useState({ email: "", password: "" });

  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:3000/", {
      username: user.email,
      password: user.password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="bg-blue-900 rounded-lg py-5">
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center relative flex flex-col mt-6 text-gray-700 bg-blue shadow-md bg-clip-border rounded-xl w-96 xl:p-10">
            <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <div>
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  {user} Login
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <div>
                  <p className="mb-2 text-sm text-start text-grey-900">Email</p>
                  <input
                    type="email"
                    name="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm text-start text-grey-900">
                    Password
                  </p>
                  <input
                    type="password"
                    name="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
               <div className="mt-5">
                <div>
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>
                  Login
                </button>
                  
                  </div>
                </div>
                <div className="mt-5">
                <div>
                <button className="" onClick={() => changeUser()}>
                  {user === "Student"
                    ? "Login as a Admin"
                    : "Login as a Student"}
                </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
