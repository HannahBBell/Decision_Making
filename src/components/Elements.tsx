import React, { useEffect, useState } from 'react';
import AttributeNode from './AttributeNode';
import FoodChoiceNode from './FoodChoiceNode';
import WinnerNode from './WinnerNode';

// export const elements = [
//     //AttributeNodes
//     {
//       id: '1',
//       type: 'input',
//       data: { label: <div><AttributeNode/></div>},
//       position: { x: 100, y: 25 },
//     },
//     {
//       id: '2',
//       type: 'input',
//       data: { label: <div><AttributeNode/></div>},
//       position: { x: 300, y: 25 },
//     },
//     {
//       id: '3',
//       type: 'input',
//       data: { label: <div><AttributeNode/></div>},
//       position: { x: 500, y: 25 },
//     },
//     {
//       id: '4',
//       type: 'input',
//       data: { label: <div><AttributeNode/></div>},
//       position: { x: 700, y: 25 },
//     },
//     //FoodChoiceNodes
//     {
//       id: '5',
//       type: 'default', 
//       data: { label: 
//         <div><FoodChoiceNode/></div>},
//       position: { x: 100, y: 200 },
//     },
//     {
//       id: '6',
//       type: 'default', 
//       data: { label: 
//         <div><FoodChoiceNode/></div>},
//       position: { x: 300, y: 200 },
//     },
//     {
//       id: '7',
//       type: 'default', 
//       data: { label: 
//         <div><FoodChoiceNode/></div>},
//       position: { x: 500, y: 200 },
//     },
//     {
//       id: '8',
//       type: 'default', 
//       data: { label: 
//         <div><FoodChoiceNode/></div>},
//       position: { x: 700, y: 200 },
//     },
//     //WinnerNode
//     {
//       id: '9',
//       type: 'output',
//       data: { label: <div><WinnerNode/></div>},
//       position: { x: 400, y: 500 },
//     },
    
//     //Line connections
//     //AttributeNodes to FoodChoicesNodes
//     { id: 'e1-5', source: '1', target: '5'},
//     { id: 'e1-6', source: '1', target: '6'},
//     { id: 'e1-7', source: '1', target: '7'},
//     { id: 'e1-8', source: '1', target: '8'},
  
//     { id: 'e2-5', source: '2', target: '5'},
//     { id: 'e2-6', source: '2', target: '6'},
//     { id: 'e2-7', source: '2', target: '7'},
//     { id: 'e2-8', source: '2', target: '8'},
  
//     { id: 'e3-5', source: '3', target: '5'},
//     { id: 'e3-6', source: '3', target: '6'},
//     { id: 'e3-7', source: '3', target: '7'},
//     { id: 'e3-8', source: '3', target: '8'},
  
//     { id: 'e4-5', source: '4', target: '5'},
//     { id: 'e4-6', source: '4', target: '6'},
//     { id: 'e4-7', source: '4', target: '7'},
//     { id: 'e4-8', source: '4', target: '8'},
    
//     //FoodChoiceNodes to WinnerNode 
//     { id: 'e5-9', source: '5', target: '9'},
//     { id: 'e6-9', source: '6', target: '9'},
//     { id: 'e7-9', source: '7', target: '9'},
//     { id: 'e8-9', source: '8', target: '9'},
//   ];
