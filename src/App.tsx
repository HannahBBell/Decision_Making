import React, { useEffect, useState } from 'react';
import './App.css';
import ReactFlow from 'react-flow-renderer';
import AttributeNode from './components/AttributeNode';
import FoodChoiceNode from './components/FoodChoiceNode';
import WinnerNode from './components/WinnerNode';

const elements = [
  //AttributeNodes
  {
    id: '1',
    type: 'input',
    data: { label: <div><AttributeNode/></div>},
    position: { x: 100, y: 25 },
  },
  {
    id: '2',
    type: 'input',
    data: { label: <div><AttributeNode/></div>},
    position: { x: 300, y: 25 },
  },
  //FoodChoiceNodes
  {
    id: '3',
    type: 'default', 
    data: { label: 
      <div><FoodChoiceNode/></div>},
    position: { x: 100, y: 150 },
  },
  {
    id: '4',
    type: 'default', 
    data: { label: 
      <div><FoodChoiceNode/></div>},
    position: { x: 300, y: 150 },
  },
  //WinnerNode
  {
    id: '5',
    type: 'output',
    data: { label: <div><WinnerNode/></div>},
    position: { x: 375, y: 400 },
  },
  
  //Line connections
  //AttributeNodes to FoodChoicesNodes
  { id: 'e1-3', source: '1', target: '3'},
  { id: 'e1-4', source: '1', target: '4'},
  { id: 'e1-4', source: '2', target: '3'},
  { id: 'e1-4', source: '2', target: '4'},
  //FoodChoiceNodes to WinnerNode 
  { id: 'e1-4', source: '3', target: '5'},
  { id: 'e1-4', source: '4', target: '5'},
];

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
//style={{height:1000}} is the size of the screen


function App() {

  return (
    <div className="App">
      <div style={{ height: 1000 }}> 
      <ReactFlow elements={elements} />
      </div>
    </div>
  );
}

export default App;