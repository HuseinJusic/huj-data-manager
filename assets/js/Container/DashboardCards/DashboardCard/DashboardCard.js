import React from "react";
import './DasboardCard.scss';

const DashboardCard = (props) => {

    return(
        <div className={"dash-card " + props.class}>
            <div className={"dash-card-body"}>
                {props.children}
            </div>
        </div>
    );
}

export default DashboardCard;