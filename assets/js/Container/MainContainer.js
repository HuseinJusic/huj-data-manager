import React, { useState, useEffect} from 'react';

import Button from '../Components/Button/Button'
import Menu from "../Components/Menu/Menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faMale, faBell, faInfo } from '@fortawesome/free-solid-svg-icons'


import {Link} from "react-router-dom";
import { Route, Switch } from "react-router";
import DashboardContainer from "./DashboardContainer/DashboardContainer";
import ProfileContainer from "./ProfileContainer/ProfileContainer";

import * as userActions from '../store/reducers/User/actions';
import * as datasetActions from '../store/reducers/Dataset/actions';


import { connect }from "react-redux";

const MainContainer = (props) => {

    useEffect(() => {
        props.getApiToken();
    }, [])

    useEffect(() => {
        if(props.user.apiToken){
            props.getDatasets(props.user.apiToken);
            props.getUserData(props.user.apiToken);
        }
    }, [props.user.apiToken])

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

const mapStateToProps = state => (
    {
        user: state.user,
        dataset: state.dataset
    }
    );

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        getApiToken: () => dispatch(userActions.getApiToken()),
        getDatasets: (token) => dispatch(datasetActions.getDatasets(token)),
        getUserData: (token) => dispatch(userActions.getUserData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);