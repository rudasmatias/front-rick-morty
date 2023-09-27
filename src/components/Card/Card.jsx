import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters, deleteCharacter } from "../../redux/actions/actions";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  addFav,
  removeFav,
  myFavorites,
}) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const onClose = (id) => {
    dispatch(deleteCharacter(id));
  };

  const handleFavorite = (state) => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, image, gender });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div
      id={id}
      className="max-w-md mx-aut text-black bg-custom  rounded-xl overflow-hidden shadow-2xl  hover:bg-gray-800 hover:scale-105 "
    >
      <div className="flex justify-between pl-2 pr-2">
        <div>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>

        <div>
          <button
            onClick={() => {
              onClose(id);
              /*  removeFav(id); */
            }}
          >
            X
          </button>
        </div>
      </div>

      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      <Link to={`/detail/${id}`}>
        <img
          src={image}
          alt={name}
          className=" hover:animate-spin  hover:rounded-full"
        />
      </Link>
    </div>
  );
}

//mapea las funciones de las actions con el componente-->solo envía señales para que actúe el reduce
function mapDispatchToProps(dispatch) {
  return {
    addFav: (props) => dispatch(addFav(props)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

//mapea el estado "global" que está en el store con el componente--> solo lee
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
