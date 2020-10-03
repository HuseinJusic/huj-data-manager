import React, { useState } from 'react';

import Button from '../Components/Button/Button'
import Menu from "../Components/Menu/Menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faMale, faBell, faInfo } from '@fortawesome/free-solid-svg-icons'
import DashboardCard from "./DashboardCard/DashboardCard";
import DatasetBlock from "../Components/DatasetBlock/DatasetBlock";

import {Link} from "react-router-dom";
import { Route, Switch } from "react-router";
import DashboardContainer from "./DashboardContainer/DashboardContainer";
import ProfileContainer from "./ProfileContainer/ProfileContainer";

import * as userActions from '../store/reducers/User/actions';


import { connect }from "react-redux";

const MainContainer = (props) => {

    props.getUser();

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
                        <Link to="/"> <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faDatabase} />
                            <span>Datensätze</span>
                        </div></Link>

                        <Link to="/profile"><div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faMale} />
                            <span>Profil</span>
                        </div></Link>

                        <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faBell} />
                            <span>Datensätze</span>
                        </div>
                        <div className={"Menu-body-toggler"}><FontAwesomeIcon icon={faInfo} />
                            <span>Info</span>
                        </div>
                    </Menu>

                <div className={menuToggledWidth + " main container-row"}>
                    <Switch>
                        <Route exact path="/" component={DashboardContainer} />
                        <Route path="/profile" component={ProfileContainer} />
                    </Switch>
                </div>


            </div>
        )
}

const mapStateToProps = state => ({ user: state.user.user })

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        getUser: () => dispatch(userActions.getUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);