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
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
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
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
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
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
                <button className="" onClick={handleSubmit}>
                  Login
                </button>

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
  );
}

export default Login;
