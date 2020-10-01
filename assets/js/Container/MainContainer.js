import React, { useState } from 'react';

import Button from '../Components/Button/Button'
import Menu from "../Components/Menu/Menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faMale, faBell, faInfo } from '@fortawesome/free-solid-svg-icons'
import DashboardCard from "./DashboardCard/DashboardCard";
import DatasetBlock from "../Components/DatasetBlock/DatasetBlock";

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
                        <DashboardCard class={"r-10"}>
                            <div className={"container-row container-padding-20"}>
                                <DatasetBlock
                                    created="01.01.2020"
                                    mode="dataset-block-primary"
                                    name="Dataset 1"
                                    total={600}
                                />

                                <DatasetBlock
                                    created="01.01.2020"
                                    mode="dataset-block-primary"
                                    name="Dataset 1"
                                    total={600}
                                />

                                <DatasetBlock
                                    created="01.01.2020"
                                    mode="dataset-block-primary"
                                    name="Dataset 1"
                                    total={600}
                                />

                                <DatasetBlock
                                    created="01.01.2020"
                                    mode="dataset-block-primary"
                                    name="Dataset 1"
                                    total={600}
                                />

                                <DatasetBlock
                                    created="01.01.2020"
                                    mode="dataset-block-primary"
                                    name="Dataset 1"
                                    total={600}
                                />
                            </div>
                        </DashboardCard>
                        <DashboardCard class={"r-05"}>
                            hello
                        </DashboardCard>
                        <DashboardCard class={"r-05"}>
                            hello
                        </DashboardCard>
                        <DashboardCard class={"r-10"}>
                            hello
                        </DashboardCard>

                    </div>

            </div>
        )
}

export default MainContainer;