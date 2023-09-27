import React from "react";
import Cards from "../../components/Cards/Cards";
import { allFavourites } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFavourites());
  }, [dispatch]);
  return (
    <div className="mb-2 pb-10 mt-2 ">
      <h1 className="text-green-400 text-[40px] mb-4 font-bold ">
        Welcome to Rick&Morty App
      </h1>
      <Cards characters={props.characters} />
    </div>
  );
}
