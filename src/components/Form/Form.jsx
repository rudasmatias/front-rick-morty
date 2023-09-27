import React, { useState } from "react";

import validate from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handlChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-green-800 text-[40px] mb-4 font-bold ">Log in</h1>
      <form
        onSubmit={handleSubmit}
        className="border border-black w-[300px] text-center rounded-lg mb-3 pt-2 pb-2 pl-2 pr-2"
      >
        <div>
          <div className="flex mb-2 ml-4 mr-2 mt-4">
            <label htmlFor="" className="ml-7 font-extrabold">
              Email:
            </label>
            <input
              type="text"
              value={userData.email}
              name="email"
              onChange={handlChange}
              className="border border-black ml-1"
            />
          </div>
          <span className="text-red-600">{errors.email}</span>
          <div className="flex  mr-2">
            <label htmlFor="" className="font-extrabold">
              Contraseña:
            </label>
            <input
              type="text"
              value={userData.password}
              name="password"
              onChange={handlChange}
              className="border border-black ml-1"
            />
          </div>
          <span className="text-red-600">{errors.password}</span>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-4 rounded ml-2 mt-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
