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
                options: ['button-primary', 'button-secondary', 'button-warn', 'button-danger', 'button-save', 'none']
            },
        }
    },
};

const Template = (args) => (<Button {...args} />);

export const PrimaryButton = Template.bind({});

export const SecondaryButton = Template.bind({});

export const SaveButton = Template.bind({});

export const WarnButton = Template.bind({});

export const DangerButton = Template.bind({});

PrimaryButton.args = {
    mode: "button-primary",
    label: "Button",
    backgroundColor: ""
}

SecondaryButton.args = {
    mode: "button-secondary",
    label: "Button",
    backgroundColor: ""
}

WarnButton.args = {
    mode: "button-warn",
    label: "Button",
    backgroundColor: ""
}

SaveButton.args = {
    mode: "button-save",
    label: "Button",
    backgroundColor: ""
}

DangerButton.args = {
    mode: "button-danger",
    label: "Button",
    backgroundColor: ""
}


