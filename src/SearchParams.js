import React from "react";
import { useEffect, useState, useContext} from "react";
import useBreedList from "./useBreedList";
import Results from "./Results.js";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([""]);
  const [theme, setTheme] = useContext(ThemeContext);
  

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
    
  }

  function setSearch(e) {
    setLocation(e.target.value);
  }

  const setAnimalOption = (e) => {
    setAnimal(e.target.value);
  };
  const setBreedOption = (e) => {
    setBreed(e.target.value);
  };
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="Location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={setSearch}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={setAnimalOption}
            onBlur={setAnimalOption}
          >
            <option />{" "}
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select 
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={setBreedOption}
            onBlur={setBreedOption}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
              Theme
              <select value={theme} onChange= {e=> setTheme(e.target.value)}
              onBlur={e=> setTheme(e.target.value)}>
              <option value="darkblue">Dark Blue</option>
              <option value="pink">Pink</option>
              </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
