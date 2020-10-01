import React, { useState, useEffect } from "react";
import './Menu.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = (props) => {

    let [menuToggle, setMenuToggle] = useState({toggled: "", toggledClass:"menu-toggled", unToggledClass: "menu-untoggled"});

    useEffect(()=>{
        setMenuToggle({...menuToggle, toggled: menuToggle.unToggledClass});
    }, [])

    const handleMenuToggle = () => {
        if(menuToggle.toggled === menuToggle.toggledClass){
            setMenuToggle({...menuToggle, toggled: menuToggle.unToggledClass});
        }else if(menuToggle.toggled === menuToggle.unToggledClass){
            setMenuToggle({...menuToggle, toggled: menuToggle.toggledClass});
        }
    }

    return(
        <div className={"Menu " + menuToggle.toggled + " " + props.class}>
            <div className={"Menu-body"}>

                <div onClick={() => {handleMenuToggle(); props.handleMenuToggle(menuToggle.toggled)}} className={"Menu-body-toggler"}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {props.children}

            </div>

        </div>
    );
}

export default Menu;