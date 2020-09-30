import React from 'react';
import './InputText.scss';

const InputText = (props) => {

    console.log(props);

    return(
        <div className={["InputText", props.mode].join(' ')}>
            <label className="InputTextLabel">{props.label}</label>
            <input disabled={!props.active} className="InputTextInput" type="text" value={props.value} onChange={(event) => props.onChange(event)}/>
        </div>
    );
}

export default InputText