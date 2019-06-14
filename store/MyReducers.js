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
        case 'DELETE_NAME' :
            const existingState = state;
            /*
            //const objToBeDeleted = action.payload;
            const existingMyNames  = existingState.myNames;
            existingMyNames.splice(action.payload.index,1);
            
            return {myNames:existingMyNames};
            */
           /*
           const mnames = state.myNames.slice();
           mnames.splice(action.payload.index,1);
           return {myNames:mnames};
           */
          const mnames = state.myNames;
          const newnames = mnames.filter(n => n.id !== action.payload.id);
          return {myNames:newnames};
        default:
            return state

    }

}

export default combineReducers({
    names:myNameObjReducer
});