import React from 'react';
import './InputText.scss';

const InputText = (props) => {
    return(
        <div className="InputText">
            <label className="InputTextLabel">{props.label}</label>
            <input className="InputTextInput" type="text" value={props.value} onChange={(event) => props.onChange(event)}/>
        </div>

    );
}

export default InputText