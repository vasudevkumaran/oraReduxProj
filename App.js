import React, {Component} from 'react';
import {View,Text} from 'react-native';
import MyContainer from './AppNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import myNameReducer from './store/MyReducers';

const store = createStore(myNameReducer);

export default class App extends Component{

    render(){
        return <Provider store={store}><MyContainer/></Provider>
    }
}