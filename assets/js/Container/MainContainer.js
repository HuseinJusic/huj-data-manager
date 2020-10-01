import React, { useState } from 'react';

import Button from '../Components/Button/Button'
import Menu from "../Components/Menu/Menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faMale, faBell, faInfo } from '@fortawesome/free-solid-svg-icons'

const MainContainer = () => {

        let [menuToggledWidth, setMenuToggledWidth] = useState('menu-side-untoggled');

        const handleMenuToggle = (toggled) => {

            if(toggled === "menu-toggled"){
                setMenuToggledWidth("menu-side-untoggled");
            }else{
                setMenuToggledWidth("menu-side-toggled");
            }
        }

        return(
            <div className="container-row container-full-height">
                    <Menu
                        class={"sidebar container-column"}
                        handleMenuToggle={handleMenuToggle}
                    >
                        <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faDatabase} />
                            <span>Datensätze</span>
                        </div>
                        <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faMale} />
                            <span>Datensätze</span>
                        </div>
                        <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faBell} />
                            <span>Datensätze</span>
                        </div>
                        <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faInfo} />
                            <span>Datensätze</span>
                        </div>
                    </Menu>

                    <div className={menuToggledWidth + " main container-row"}>
                        <div className="r-02">r1</div>
                        <div className="r-06">r1</div>
                        <div className="r-02">r1</div>

                        <div className="r-08">r2</div>
                        <div className="r-01">r2</div>
                        <div className="r-01">r2</div>

                        <div className="r-07">r3</div>
                        <div className="r-02">r3</div>
                        <div className="r-01">r3</div>
                    </div>

            </div>
        )
}

export default MainContainer;