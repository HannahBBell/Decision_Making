import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import AttributeNode from './components/AttributeNode';
import FoodChoiceNode from './components/FoodChoiceNode';
import WinnerNode from './components/WinnerNode';
import {elements} from './components/Elements'



interface iElements {
  id: string;
  type: string;
  data: {
    label: JSX.Element;
  };
  position: {
    x: number;
    y: number;
  }
}




function App() {
  const [weightedInput, setWeightedInput] = useState("0");
  const [attributeNameInput, setAttributeNameInput] = useState("");

  return (
    <div className="App">
      <div style={{ height: 1000 }}> 
      <ReactFlow elements={elements} />
      </div>
    </div>
  );
}

export default App;