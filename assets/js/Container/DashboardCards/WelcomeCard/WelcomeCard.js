import React from 'react'
import DashboardCard from "../DashboardCard/DashboardCard";

import './WelcomeCard.scss'

const WelcomeCard = (props) => {
    return(
        <DashboardCard class={props.class}>
            <div className={"welcome-card"}>
                <label>Hi, {props.user.name}</label>
            </div>
        </DashboardCard>
    );
}

export default WelcomeCard