import React from 'react';
import ReactFlow from 'react-flow-renderer';
import AttributeNode from './AttributeNode';

export default function AddNodeButtons() {
    return(
        <div>
        <button>Add New Attribute</button>
        <br/>
        <button>Add New Food</button>
        {/* <button>Add Winner</button> */}
        </div>  
    )
}