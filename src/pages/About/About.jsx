import React from "react";

import linkedin from "/linkedin.png";
import github from "/github.jpg";
import carnet from "/carnet.jpg";

export default function About(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <h1 className="text-green-400 text-[40px] mb-4 font-bold ">About me!</h1>
      <p className="text-black-800 text-[40px] mb-4 font-bold">
        Hello everyone, my name is Matias and I am starting my path to Web
        application development with HENRY.<br></br>
      </p>
      <section className="w-[400px] h-1/2 bg-nave flex flex-col items-center justify-center rounded-3xl mt-4">
        <div className="bg-customProfile text-center p-4">
          <img
            src={carnet}
            alt="foto_perfil"
            className="w-[200px] h-[200px] mx-auto mb-4 rounded-2xl   hover:animate-bounce"
          />
          <h3 className="text-white font-medium text-lg hover:text-[20px] hover:text-yellow-600 ">
            Ronald Matias Rudas
          </h3>
          <h3 className="text-white font-medium text-lg hover:text-[20px] hover:text-yellow-600 ">
            Fullstack Developer
          </h3>
          <h3 className="text-white font-medium text-lg hover:text-[20px] hover:text-yellow-600 ">
            ronaldmatiasrudas@gmail.com
          </h3>
        </div>
      </section>

      <div className="flex justify-center w-200px mt-8">
        <a href="https://www.linkedin.com/in/ronald-rudas-5a094917a/">
          <img src={linkedin} alt="linkedin_image" className="h-20 mr-2" />
        </a>
        <a href="https://github.com/rudasmatias">
          <img
            src={github}
            alt="github_image"
            className="h-20 ml-2 rounded-lg"
          />
        </a>
      </div>
    </div>
  );
}
