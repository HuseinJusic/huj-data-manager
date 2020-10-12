import React from 'react';
import './InputText.scss';
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InputText = (props) => {

    return(
        <div className={["InputText", props.mode].join(' ')}>
            <label className="InputTextLabel">{props.label}</label>
            <div className={props.secretToggle ? "InputTextContainer TextInputSecretToggle" : "InputTextContainer"}>
                <input disabled={!props.active} className="InputTextInput" type={props.secret ? "password" : "text"} value={props.value} onChange={(event) => props.onChange(event)}/>
                {props.secretToggle ?
                    <div className={"SecretToggler"} onClick={props.onSecretToggle}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    : null}
            </div>

        </div>
    );
}

export default InputText