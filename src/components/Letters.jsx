import React from "react";
import { NavLink } from "react-router-dom";
import { ContainerLetter } from "../style";
import "./letters.css";

const Letters = () => {
  return (
    <ContainerLetter className="containerLetter  ">
      <NavLink to="/pet/a">A</NavLink>
      <NavLink to="/pet/b">B</NavLink>
      <NavLink to="/pet/c">C</NavLink>
      <NavLink to="/pet/d">D</NavLink>
      <NavLink to="/pet/e">E</NavLink>
      <NavLink to="/pet/f">F</NavLink>
      <NavLink to="/pet/g">G</NavLink>
      <NavLink to="/pet/h">H</NavLink>
      <NavLink to="/pet/i">I</NavLink>
      <NavLink to="/pet/j">J</NavLink>
      <NavLink to="/pet/k">K</NavLink>
      <NavLink to="/pet/l">L</NavLink>
      <NavLink to="/pet/m">M</NavLink>
      <NavLink to="/pet/n">N</NavLink>
      <NavLink to="/pet/ñ">Ñ</NavLink>
      <NavLink to="/pet/o">O</NavLink>
      <NavLink to="/pet/p">P</NavLink>
      <NavLink to="/pet/q">Q</NavLink>
      <NavLink to="/pet/r">R</NavLink>
      <NavLink to="/pet/s">S</NavLink>
      <NavLink to="/pet/t">T</NavLink>
      <NavLink to="/pet/u">U</NavLink>
      <NavLink to="/pet/v">V</NavLink>
      <NavLink to="/pet/w">W</NavLink>
      <NavLink to="/pet/x">X</NavLink>
      <NavLink to="/pet/y">Y</NavLink>
      <NavLink to="/pet/z">Z</NavLink>
    </ContainerLetter>
  );
};

export default Letters;
