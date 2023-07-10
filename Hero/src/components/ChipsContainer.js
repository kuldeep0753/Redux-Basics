import React from 'react';
import { buyChips } from '../redux';
import {connect} from 'react-redux';

const ChipsContainer = (props) => {
  return (
    <div>
        <h2>No Of Chips Packet: {props.nChips}</h2>
        <button onClick={()=>{props.buyChips()}}>Chips </button>
    </div>
  )
}

const mapStateToProps=(state)=>{

    return {
        nChips:state.chips.numOfChips
    }

}

const mapDispatchToProps=(dispatch)=>{
    return {buyChips:()=>dispatch(buyChips())}
}

export default connect(mapStateToProps,mapDispatchToProps)( ChipsContainer);