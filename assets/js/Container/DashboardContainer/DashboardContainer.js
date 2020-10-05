import React, { useState, useEffect } from "react";
import DatasetBlock from "../../Components/DatasetBlock/DatasetBlock";
import DashboardCard from "../DashboardCards/DashboardCard/DashboardCard";

import * as dataActions from '../../store/reducers/Dataset/actions';

import {connect} from "react-redux";
import AUX from "../AUX/AUX";
import WelcomeCard from "../DashboardCards/WelcomeCard/WelcomeCard";
import * as datasetActions from "../../store/reducers/Dataset/actions";

const DashboardContainer = (props) => {

    let [data,setData] = useState({
        datasets: null,
        userData: null
    });
    useEffect(() => {
        if(!props.dataset.isLoading && data.datasets === null){
            props.setDataLoading()
            props.getDatasets(props.user.apiToken)
        }
        setData({
            ...data,
            datasets: "what the shit"
        })
    }, []);

    useEffect(() => {
            if(!props.dataset.isLoading){
                setData({ ...data,
                    datasets: props.dataset.datasets.map((dataset) => {
                            return <DatasetBlock created={dataset.createdAt}
                                                 mode="dataset-block-primary"
                                                 name={dataset.name}
                                                 total="xxx"
                                                 key={dataset.id}
                            />
                            }
                        )
                    }
                );
            } else{
                setData({
                    ...data,
                    datasets: <div>Loading</div>
                });
            }
    }, [props.dataset])

    useEffect(() => {
        if(!props.user.isLoading){
            setData({ ...data,
                userData: <WelcomeCard class="r-05" user={props.user.user} />
            });
        }else{
            setData({
                ...data,
                userData: <div>Loading</div>
            });
        }
    }, [props.user])



    return(
        <AUX>

            { data.userData }

            <DashboardCard class={"r-05"}>
                <div className={"container-row container-padding-20"}>
                   APIKEY Changes etc
                </div>
            </ DashboardCard >

            <DashboardCard class={"r-10"}>
                <div className={"container-row container-padding-20"}>
                    FANCY SHIT DIAGRAM
                </div>
            </ DashboardCard >
            <DashboardCard class={"r-10"}>
                <div className={"container-row container-padding-20"}>
                    {data.datasets}
                </div>
            </DashboardCard>
        </AUX>

    );
}

const mapStateToProps = state => (
    {
        dataset: state.dataset,
        user: state.user
    }
);

const mapDispatchToProps = dispatch => {
    return {
        getDatasets: (token) => dispatch(datasetActions.getDatasets(token)),
        setDataLoading: () => dispatch(dataActions.setIsLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
