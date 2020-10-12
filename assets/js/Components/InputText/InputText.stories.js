import React from 'react';
import UseInputHook from "./UseInputHook";
import InputText from "./InputText";

export default {
    title: 'InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
        mode: {
            control: {
                type: "select",
                options: ['input-text-primary', 'input-text-secondary','input-text-danger','input-text-warn', 'input-text-save', 'none']
            },
        }
    },
};

const Template = (args) => {

    const [text, textInput] = UseInputHook({...args});

    return (textInput);
};

export const InputTextBasic = Template.bind({});
export const InputTextPrimary = Template.bind({});
export const InputTextSecondary = Template.bind({});
export const InputTextWarn = Template.bind({});
export const InputTextDanger = Template.bind({});
export const InputTextSave = Template.bind({});
export const InputTextSecretToggle = Template.bind({});

InputTextBasic.args = {

}

InputTextPrimary.args = {
    mode: 'input-text-primary',
    label: "Textinput",
    active: true
}

InputTextSecondary.args = {
    mode: 'input-text-secondary',
    label: "Textinput",
    active: true
}

InputTextWarn.args = {
    mode: 'input-text-warn',
    label: "Textinput",
    active: true
}

InputTextDanger.args = {
    mode: 'input-text-danger',
    label: "Textinput",
    active: true
}

InputTextSave.args = {
    mode: 'input-text-save',
    label: "Textinput",
    active: true
}

InputTextSecretToggle.args = {
    mode: 'input-text-save',
    label: "Textinput",
    active: true,
    secretToggle: true,
    secret: true
}





