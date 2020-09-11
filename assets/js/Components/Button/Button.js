import React from 'react';
import './Button.scss';

const Button = (props) => {
    return(
        <div
            className={["button", props.mode].join(' ')}
            onClick={() => console.log("nothing")}
            style={{backgroundColor: props.backgroundColor}}
        >
            <span>{ props.label }</span>
        </div>
    );
}

export default Button