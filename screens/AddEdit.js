import React, {Component} from 'react';
import {View,Text,ScrollView,TextInput,Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addName} from '../store/MyActions'

class AddEdit extends Component{

    constructor(props){
        super(props)
        this.state = {name:'',last_name:'',id:Math.random()+""}
    }

    addNameObj = () =>{
        const {name,last_name,id} = this.state;
        this.props.addName({name:name,last_name:last_name,id:id});
        this.props.navigation.goBack();
    }

    render(){
        return <ScrollView>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Name</Text>
                <TextInput placeholder="Enter first name" onChangeText={(t)=>this.setState({name:t})}
                style={{width:200, height:40, borderWidth:2, borderColor:'black',borderRadius:3, marginBottom:15}} />
                <Text>Last name</Text>
                <TextInput placeholder="Enter last name" onChangeText={(t)=>this.setState({last_name:t})}
                style={{width:200, height:40, borderWidth:2, borderColor:'black',borderRadius:3, marginBottom:15}} />
                <Button title="Save" onPress={this.addNameObj} />
            </View>
        </ScrollView> 
    }
}

const mapStateToProps = (state) =>{
    const {names} = state;
    return names;
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({addName},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AddEdit)
