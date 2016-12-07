/**
 * Created by SP on 2016/12/2.
 */
import React from 'react'
import {render} from 'react-dom'
import BingApp from './contrainers/BingApp'
import todoApp from './reducers';
import {Provider} from 'react-redux'
import { createStore } from 'redux'

let store = createStore(todoApp,{
    isShow:true,
    mainUrl:'',
});

render(
    <Provider store={store}>
        <BingApp/>
    </Provider>,
    document.getElementById('root')
);