import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { addCharacters, deleteCharacter } from "../src/redux/actions/actions";

import Nav from "./components/Nav/Nav";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);
  const { pathname } = useLocation(); // {,,}
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        `/login/?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      return { error: error.message };
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    dispatch(addCharacters(id));
    navigate("/home");
  };

  return (
    <div className="flex flex-col p-5 items-center h-screen">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Home characters={allCharacters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
