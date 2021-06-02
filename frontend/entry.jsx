import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { login } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    console.log(store.getState())
    ReactDOM.render(<Root store={store}/>, root)
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login
})

    // let preloadedState = undefined;
    // if (window.currentUser) {
    //     preloadedState = {
    //         session: {
    //             currentUser: window.currentUser
    //         }
    //     };
    // }
    // ##for bootstrapping