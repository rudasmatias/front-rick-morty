import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPj } from "../../redux/actions/actions";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.pj);

  useEffect(() => {
    dispatch(obtenerPj(id));
  }, [dispatch]);

  return (
    <>
      <h1 className="mt-4 text-green-400 text-[40px] mb-4 font-bold ">
        Detail of {character.name}
      </h1>
      <div className="flex max-w-md mx-aut text-black bg-custom  rounded-xl overflow-hidden shadow-2xl bg-moco hover:bg-gray-800 hover:scale-105 mt-10">
        <aside className="flex flex-col justify-center  font-semibold w-[150px]">
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin ? character.origin.name : "Desconocido"}</h2>
        </aside>

        <img src={character.image} alt="" />
      </div>
    </>
  );
}
