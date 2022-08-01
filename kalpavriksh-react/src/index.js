import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const rootelment = document.getElementById("root");
const root = createRoot(rootelment);
root.render(<App />);
