import React from 'react';
import './App.css';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Calories' },
    position: { x: 100, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 300, y: 25 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Hannah' },
    position: { x: 500, y: 25 },
  },
  {
    id: '4',
    type: 'output', // output node
    data: { label: <div>
      <input placeholder="Add food here"></input>
      
      </div>},
    position: { x: 500, y: 25 },
  },
  // animated lines between 'Nodes'
  { id: 'e1-2', source: '1', target: '2', animated: true },//animated line
  { id: 'e2-3', source: '2', target: '3' },//solid line
];

//style={{height:1000}} is the size of the screen
function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <div style={{ height: 1000 }}> 
      <ReactFlow elements={elements} />
      </div>
    </div>
  );
}



export default App;
