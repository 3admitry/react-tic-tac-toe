import React from 'react';

type SquarePropsType ={
    value: number
    onClick: ()=> void
}

export function Square(props:SquarePropsType) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}