import { Link } from "react-router-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, `${props.name}`),
//     React.createElement("h2", {}, `${props.animal}`),
//     React.createElement("h2", {}, `${props.breed}`),
//   ]);
// };

// export default Pet;

const Pet = ({ name, animal, breed, images, location, id }) => {
  //console.log({ images });
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  // if (images > 0) {
  //   hero = images[0];
  // } // images didnt have length property, yet they did in the api as far as i could see. let default images render
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
