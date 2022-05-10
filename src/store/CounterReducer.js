import {createStore} from 'redux'

const intailCount = {counter:0};
const CounterReducer = (state = intailCount,action) =>
{
    // if(action.type == "Increment")
        // return state
    return state;
}


const store = createStore(CounterReducer);

export default store;