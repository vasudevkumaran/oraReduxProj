import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: <TouchableOpacity style={{ marginRight: 10 }} onPress={()=> navigation.navigate('AddEdit')}>
                <Text>Add</Text>
            </TouchableOpacity>
        }
    }

    constructor(props){
        super(props)
        //this.state = {myNames:[{name:"Dev",last_name:"V",id:'2'}]};
    }

    example = () => {
        names = ['dev','raj'];
        names.map((obj,index)=>{
            return {}
        })
    }

    render() {
        return <ScrollView>
            {
                this.props.myNames.map((obj,index) => (
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 40, borderWidth: 2, borderColor: 'black', margin: 10 }} key={obj.id}>
                    <Text style={{ fontSize: 20 }}>{obj.name}</Text>
                </TouchableOpacity>)
                )
            }
            
        </ScrollView>
    }
}

const mapStateToProps = (state) =>{
    const {names} = state;
    return names;
}

export default connect(mapStateToProps)(Home);
