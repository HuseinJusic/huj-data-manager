import React from 'react';
import UseInputHook from "./UseInputHook";

export default {
    title: 'InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
        mode: {
            control: {
                type: "select",
                options: ['input-text-primary', 'input-text-secondary', 'none']
            },
        }
    },
};

const Template = (args) => {

    const [text, textInput] = UseInputHook({ type: "text", label: "Textinput"});

    return (textInput);
};

export const InputText = Template.bind({});

InputText.args = {

}




