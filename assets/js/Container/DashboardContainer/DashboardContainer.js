import React from "react";
import DatasetBlock from "../../Components/DatasetBlock/DatasetBlock";
import DashboardCard from "../DashboardCard/DashboardCard";

const DashboardContainer = () => {
    return(
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
    );
}

export default DashboardContainer;