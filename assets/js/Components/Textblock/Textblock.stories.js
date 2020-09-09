import React from 'react';

import Textblock from './Textblock';

export default {
    title: 'Textblock',
    component: Textblock,
    argTypes: {
       // backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Textblock />;

export const Primary = Template.bind({});

