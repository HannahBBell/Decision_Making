import React from 'react';
import './App.css';
import ReactFlow from 'react-flow-renderer';
import AttributeNode from './components/AttributeNode'
import FoodChoiceNode from './components/FoodChoiceNode'
import WinnerNode from './components/WinnerNode'
import AddingNodeButtons from './components/AddingNodeButtons'

const elements = [
  {
    id: '1',
    // you can also pass a React component as a label
    type: 'input',
    data: { label: <div><AttributeNode/></div>},
    position: { x: 300, y: 25 },
  },
  {
    id: '2',
    type: 'default', 
    data: { label: 
      <div><FoodChoiceNode/></div>},
    position: { x: 500, y: 25 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: <div><WinnerNode/></div>},
    position: { x: 100, y: 25 },
  },
  
  // animated lines between 'Nodes'
  // { id: 'e1-2', source: '1', target: '2', animated: true },//animated line
  // { id: 'e2-3', source: '2', target: '3' },//solid line
];

//style={{height:1000}} is the size of the screen
function App() {
  return (
    <div className="App">
      <AddingNodeButtons/>
      <p>Hello</p>
      <div style={{ height: 1000 }}> 
      <ReactFlow elements={elements} />
      </div>
    </div>
  );
}



export default App;
