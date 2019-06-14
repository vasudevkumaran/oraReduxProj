import {combineReducers} from 'redux';


const INITIAL_STATE = {myNames:[
    {name:"Vasudev", last_name:"Kumaran", id:Math.random()+""}
]};

const myNameObjReducer = (state = INITIAL_STATE,action) => {

    switch(action.type){
        case 'ADD_NAME':

            const obj = action.payload;
            const newState = {myNames:[obj,...state.myNames]}

        return newState;
        default:
            return state

    }

}

export default combineReducers({
    names:myNameObjReducer
});