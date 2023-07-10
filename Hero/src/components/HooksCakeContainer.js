import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.numOfCakes);
    console.log(numOfCakes);
    const dispatch =useDispatch();
    console.log(dispatch);
    return(<div>
        <h3>Number Dec:{numOfCakes}</h3>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>)
}



export default HooksCakeContainer;