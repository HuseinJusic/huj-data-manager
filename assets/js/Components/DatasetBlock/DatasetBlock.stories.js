import React from 'react';
import DatasetBlock from "./DatasetBlock";

export default {
    title: 'DatasetBlock',
    component: DatasetBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
        mode: {
            control: {
                type: "select",
                options: ['dataset-block-primary', 'dataset-block-secondary', 'dataset-block-warn', 'dataset-block-danger', 'dataset-block-save', 'none']
            },
        },
        icon: {
            control: {
                type: "select",
                options: ['icon1', 'icon2']
            },
        }
    },
};

const Template = (args) => (<DatasetBlock {...args} />);

export const PrimaryDatasetBlock = Template.bind({});
export const SecondaryDatasetBlock = Template.bind({});
export const WarnDatasetBlock = Template.bind({});
export const DangerDatasetBlock = Template.bind({});
export const SaveDatasetBlock = Template.bind({});



PrimaryDatasetBlock.args = {
    mode: "dataset-block-primary",
    name: 'Dataset 1',
    created: '01.01.2020',
    total: 600
}

SecondaryDatasetBlock.args = {
    mode: "dataset-block-secondary",
    name: 'Dataset 1',
    created: '01.01.2020',
    total: 600
}

WarnDatasetBlock.args = {
    mode: "dataset-block-warn",
    name: 'Dataset 1',
    created: '01.01.2020',
    total: 600
}

DangerDatasetBlock.args = {
    mode: "dataset-block-danger",
    name: 'Dataset 1',
    created: '01.01.2020',
    total: 600
}

SaveDatasetBlock.args = {
    mode: "dataset-block-save",
    name: 'Dataset 1',
    created: '01.01.2020',
    total: 600
}


