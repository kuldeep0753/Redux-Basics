import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';


const CakeContainer = (props) => {
    // console.log(props);
  return (
    <div>
        <h2>Number of Cake:{props.nCakes}</h2>
        <button onClick={props.buyForCake}>Buy Now</button>
    </div>
  )
}


//1.this function get the redux state
const mapStateToProps =state=>{
    console.log(state);
    return {
        nCakes: state.cake.numOfCakes,
    }
}


//2.this function get the dispatch method as a parameter and returns an object

const mapDispatchToProps=(dispatch)=>{
    console.log(dispatch);
    return {
        buyForCake: ()=>dispatch(buyCake()),
    }
}


//3.connect the two above functions 

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);