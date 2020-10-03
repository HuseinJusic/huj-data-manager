import '../css/app.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import MainContainer from './Container/MainContainer';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store'



const domContainer = document.querySelector('#app');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MainContainer />
        </Router>
    </Provider>
    , domContainer);

