import React , {Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import Home from './screens/Home';
import AddEdit from './screens/AddEdit';

const route = createStackNavigator(
    {
        Home:{screen:Home},
        AddEdit:{screen:AddEdit}
    },
    {
        initialRouteName:'Home'
    }
);
const AppContainer = createAppContainer(route);
export default class MyContainer extends Component{
    render(){
        return <AppContainer/>
    }
}

