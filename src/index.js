/**
 * Created by SP on 2016/12/2.
 */
import React from 'react'
import {render} from 'react-dom'
import BingApp from './contrainers/BingApp'
import todoApp from './reducers';
import {Provider} from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middleware = [ thunk ];

let store = createStore(todoApp,{
    isShow:true,
    mainUrl:'',
}, applyMiddleware(...middleware));
 /*let store = createStore(todoApp,applyMiddleware(...middleware));*/
render(
    <Provider store={store}>
        <BingApp/>
    </Provider>,
    document.getElementById('root')
);