import React from 'react';
import { buyIceCream } from '../redux/ice-cream/iceCreamActions';
import {connect} from "react-redux";

const IceCreamContainer = (props) => {
    console.log(props);
  return (
    <div>
        <h2>Number of Ice-Cream:{props.nIceCream}</h2>
        <button onClick={props.buyIce}>Ice-Cream</button>
    </div>
  )
}

const mapStateToProps1=(state)=>{
    return {
        nIceCream:state.iceCream.numOfIceCream,
    }
}

const mapDispatchToProps1=(dispatch)=>{
return {
    buyIce:()=>dispatch(buyIceCream()),
}
}

export default connect(mapStateToProps1,mapDispatchToProps1)(IceCreamContainer);