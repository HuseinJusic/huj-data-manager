import '../css/app.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import MainContainer from './Container/MainContainer';


const domContainer = document.querySelector('#app');
ReactDOM.render(<MainContainer />, domContainer);

