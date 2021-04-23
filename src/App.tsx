import { useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import AttributeNode from './components/AttributeNode';
import FoodChoiceNode from './components/FoodChoiceNode';
import WinnerNode from './components/WinnerNode';
import "./App.css"
import 'react-flow-renderer/dist/style.css';
import { useWindowSize } from 'react-use';

function App() {

  //useStates for AttributeNode1
  const [weightedInput1, setWeightedInput1] = useState(0);
  const [attributeNameInput1, setAttributeNameInput1] = useState("");

  //useStates for AttributeNode2
  const [weightedInput2, setWeightedInput2] = useState(0);
  const [attributeNameInput2, setAttributeNameInput2] = useState("");

  //useStates for AttributeNode3
  const [weightedInput3, setWeightedInput3] = useState(0);
  const [attributeNameInput3, setAttributeNameInput3] = useState("");

  //useStates for AttributeNode4
  const [weightedInput4, setWeightedInput4] = useState(0);
  const [attributeNameInput4, setAttributeNameInput4] = useState("");

  //useStates for FoodChoiceNode 'Food Name' - one for each of 4 FoodChoiceNode(s)
  const [foodNameInput1, setFoodNameInput1] = useState("")
  const [foodNameInput2, setFoodNameInput2] = useState("")
  const [foodNameInput3, setFoodNameInput3] = useState("")
  const [foodNameInput4, setFoodNameInput4] = useState("")

  //useStates for FoodChoiceNode 'Total Score' - one for each of 4 FoodChoiceNode(s)
  const [foodChoice1TotalScore, setFoodChoice1TotalScore] = useState(0)
  const [foodChoice2TotalScore, setFoodChoice2TotalScore] = useState(0)
  const [foodChoice3TotalScore, setFoodChoice3TotalScore] = useState(0)
  const [foodChoice4TotalScore, setFoodChoice4TotalScore] = useState(0)

  //node positioning using window size
  const { width } = useWindowSize()

  //foodNameInput and foodChoiceTotalScore arrays to pass into WinnerNode 
  const winnerNodeFoodNameInputArray = [foodNameInput1, foodNameInput2, foodNameInput3, foodNameInput4];
  const winnerNodeFoodChoiceTotalScoreArray = [foodChoice1TotalScore, foodChoice2TotalScore, foodChoice3TotalScore, foodChoice4TotalScore];

  //attributeNameInput and weightedInput arrays to pass into FoodChoiceNode
  const foodChoiceNodeAttributeNameInputArray = [attributeNameInput1, attributeNameInput2, attributeNameInput3, attributeNameInput4];
  const foodChoiceNodeWeightedInputArray = [weightedInput1, weightedInput2, weightedInput3, weightedInput4];

  const elements = [
    //AttributeNodes
    {
      id: '1',
      type: 'input',
      data: { label: <div><AttributeNode setAttributeNameInput={setAttributeNameInput1} attributeNameInput={attributeNameInput1} setWeightedInput={setWeightedInput1} weightedInput={weightedInput1} /></div> },
      position: { x: width / 2 - 410, y: 50 },
    },
    {
      id: '2',
      type: 'input',
      data: { label: <div><AttributeNode setAttributeNameInput={setAttributeNameInput2} attributeNameInput={attributeNameInput2} setWeightedInput={setWeightedInput2} weightedInput={weightedInput2} /></div> },
      position: { x: width / 2 - 200, y: 50 },
    },
    {
      id: '3',
      type: 'input',
      data: { label: <div><AttributeNode setAttributeNameInput={setAttributeNameInput3} attributeNameInput={attributeNameInput3} setWeightedInput={setWeightedInput3} weightedInput={weightedInput3} /></div> },
      position: { x: width / 2 + 10, y: 50 },
    },
    {
      id: '4',
      type: 'input',
      data: { label: <div><AttributeNode setAttributeNameInput={setAttributeNameInput4} attributeNameInput={attributeNameInput4} setWeightedInput={setWeightedInput4} weightedInput={weightedInput4} /></div> },
      position: { x: width / 2 + 220, y: 50 },
    },
    {
      id: '5',
      type: 'default',
      data: {
        label:
          <div><FoodChoiceNode foodChoiceNodeAttributeNameInputArray={foodChoiceNodeAttributeNameInputArray} foodChoiceNodeWeightedInputArray={foodChoiceNodeWeightedInputArray} setFoodNameInput={setFoodNameInput1} setFoodChoiceTotalScore={setFoodChoice1TotalScore} /></div>
      },
      position: { x: width / 2 - 410, y: 200 },
    },
    {
      id: '6',
      type: 'default',
      data: {
        label:
          <div><FoodChoiceNode foodChoiceNodeAttributeNameInputArray={foodChoiceNodeAttributeNameInputArray} foodChoiceNodeWeightedInputArray={foodChoiceNodeWeightedInputArray} setFoodNameInput={setFoodNameInput2} setFoodChoiceTotalScore={setFoodChoice2TotalScore} /></div>
      },
      position: { x: width / 2 - 200, y: 200 },
    },
    {
      id: '7',
      type: 'default',
      data: {
        label:
          <div><FoodChoiceNode foodChoiceNodeAttributeNameInputArray={foodChoiceNodeAttributeNameInputArray} foodChoiceNodeWeightedInputArray={foodChoiceNodeWeightedInputArray} setFoodNameInput={setFoodNameInput3} setFoodChoiceTotalScore={setFoodChoice3TotalScore} /></div>
      },
      position: { x: width / 2 + 10, y: 200 },
    },
    {
      id: '8',
      type: 'default',
      data: {
        label:
          <div><FoodChoiceNode foodChoiceNodeAttributeNameInputArray={foodChoiceNodeAttributeNameInputArray} foodChoiceNodeWeightedInputArray={foodChoiceNodeWeightedInputArray} setFoodNameInput={setFoodNameInput4} setFoodChoiceTotalScore={setFoodChoice4TotalScore} /></div>
      },
      position: { x: width / 2 + 220, y: 200 },
    },

    //WinnerNode
    {
      id: '9',
      type: 'output',
      data: { label: <div><WinnerNode winnerNodeFoodNameInputArray={winnerNodeFoodNameInputArray} winnerNodeFoodChoiceTotalScoreArray={winnerNodeFoodChoiceTotalScoreArray} /></div> },
      position: { x: width / 2 - 95, y: 500 },
    },

    //Line connections
    //AttributeNodes to FoodChoicesNodes
    { id: 'e1-5', source: '1', target: '5' },
    { id: 'e1-6', source: '1', target: '6' },
    { id: 'e1-7', source: '1', target: '7' },
    { id: 'e1-8', source: '1', target: '8' },

    { id: 'e2-5', source: '2', target: '5' },
    { id: 'e2-6', source: '2', target: '6' },
    { id: 'e2-7', source: '2', target: '7' },
    { id: 'e2-8', source: '2', target: '8' },

    { id: 'e3-5', source: '3', target: '5' },
    { id: 'e3-6', source: '3', target: '6' },
    { id: 'e3-7', source: '3', target: '7' },
    { id: 'e3-8', source: '3', target: '8' },

    { id: 'e4-5', source: '4', target: '5' },
    { id: 'e4-6', source: '4', target: '6' },
    { id: 'e4-7', source: '4', target: '7' },
    { id: 'e4-8', source: '4', target: '8' },

    //FoodChoiceNodes to WinnerNode 
    { id: 'e5-9', source: '5', target: '9' },
    { id: 'e6-9', source: '6', target: '9' },
    { id: 'e7-9', source: '7', target: '9' },
    { id: 'e8-9', source: '8', target: '9' },
  ];

  //allowing/stopping user from dragging nodes about
  const [isDraggable, setIsDraggable] = useState(false);

  const style = {
    background: '#E6F2FF',
    width: '2000px',
    height: '1000px',
  }

  return (
    <div className="App">
      <h1 className="title">
        Food Decider!
      </h1>
      <p className="intro-text">
        Getting started: Try adding some attributes and foods...
        <br />
      </p>
      <p className="tag-line">Decision making made easy! </p>
      <div className="checkbox">
        <label htmlFor="draggable">
          <input
            id="draggable"
            type="checkbox"
            checked={isDraggable}
            onChange={(event) => setIsDraggable(event.target.checked)}
            className="react-flow__draggable"
          />
            : Tick to drag nodes
        </label>
      </div>
      <div>
      </div>
      <div className="flex-container">
        <ReactFlow elements={elements} nodesDraggable={isDraggable} snapToGrid={true} style={style} />
      </div>
    </div>
  );
}

export default App;