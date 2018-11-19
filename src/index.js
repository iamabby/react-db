import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import commonData from './sotre/common';
import loginData from './sotre/login';
import Loadable from 'react-loadable';
import Loading from "./component/Loading/Loading";
const store = {
    loginData: loginData,
    commonData: commonData
}








const LoadableComponent  = Loadable({
    loader: () => import('./App'),
    loading: Loading,
});



ReactDOM.render((<Provider  {...store}>
        <LoadableComponent  />
    </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
