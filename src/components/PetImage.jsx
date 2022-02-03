import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pet.css";

const PetImage = () => {
  const { namePet } = useParams();
  const [image, setImage] = useState([]);
  useEffect(() => {
    getImage();
  }, [namePet]);

  const getImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${namePet}/images/random`
    );
    const data = await response.json();
    setImage(data);
  };

  return (
    <div className="imageContainer ">
      {<img height="350" width="500" src={image.message} alt="" />}
    </div>
  );
};

export default PetImage;
