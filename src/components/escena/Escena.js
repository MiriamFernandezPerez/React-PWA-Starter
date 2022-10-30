import React from "react";
import {Marco} from './styled';

export const Escena = (props) => {
  return (
  <p>
    <Marco>{props.text}</Marco>
  </p>
  );
};