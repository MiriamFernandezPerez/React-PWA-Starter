import React from "react";
import {MarcoStyle, BotonStyle} from './styled';

export const Escena = (props) => {
    return (
    <p>
       <MarcoStyle className={props.estado}>{props.text}</MarcoStyle>
    </p>
    );
};

export const Botones = (props) => {
    return (
        <BotonStyle>{props.textBtn}</BotonStyle>
    );
};

