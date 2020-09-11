import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        mode: {
            control: {
                type: "select",
                options: ['primary', 'secondary']
            },
        }
    },
};

const Template = (args) => (<Button {...args} />);


export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
    mode: "primary",
    label: "Button",
    backgroundColor: ""
}

PrimaryButton.parameters = {
    backgroundColor: {
        values: [
            {name: "danger", value: '#0f0'}
        ]
    }
}

