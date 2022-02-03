import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./pet.css";

const Pet = () => {
  const { letter } = useParams();
  const [petGroup, setPetGroup] = useState([]);
  console.log(letter);
  useEffect(() => {
    getApi();
  }, [letter]);

  const getApi = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const { message } = await response.json();
    const groupItems = [];
    for (const property in message) {
      if (property[0] === letter) {
        groupItems.push(property);
        // setPetGroup([...petGroup, property]);
      }
    }
    setPetGroup([...groupItems]);
  };
  return (
    <div>
      <ul className="">
        {petGroup.length > 0 ? (
          petGroup.map((pet) => <Link to={`/pet/image/${pet}`}>{pet}</Link>)
        ) : (
          <h3>No hay Pets :(</h3>
        )}
      </ul>
    </div>
  );
};

export default Pet;
