import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import {
  filterCards,
  orderCards,
  getAll,
  allFavourites,
} from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Favorites({ orderCards, filterCards }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  const handleOrder = (event) => {
    orderCards(event.target.value);
    setAux(true);
  };

  const handleFilter = (event) => {
    filterCards(event.target.value);
  };

  const all = () => {
    dispatch(getAll());
  };

  useEffect(() => {
    dispatch(allFavourites());
  }, [dispatch]);

  return (
    <div className="mb-2 pb-10">
      <h1 className="text-green-400 text-[40px] mb-4 font-bold mt-2">
        My favourites
      </h1>
      <div>
        <select onChange={handleOrder} className="mr-1 h-10 bg-green-300">
          <option>Order:</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} className="ml-1 h-10 bg-green-300">
          <option>Gender:</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-4 rounded ml-2"
          onClick={all}
        >
          All
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {favorites.map((favorite) => {
          return (
            <Card
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              gender={favorite.gender}
              image={favorite.image}
            />
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { myFavorites: state.myFavorites };
}

function mapDispatchToProps(dispatch) {
  return {
    orderCards: (order) => dispatch(orderCards(order)),
    filterCards: (gender) => dispatch(filterCards(gender)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
