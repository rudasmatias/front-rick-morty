import Card from "../Card/Card";

export default function Cards(props) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          id={pj.id}
          name={pj.name}
          species={pj.species}
          gender={pj.gender}
          status={pj.status}
          image={pj.image}
          origin={pj.origin?.name}
        />
      ))}
    </div>
  );
}
