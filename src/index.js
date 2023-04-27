import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import { Design } from './BootstrapDemo/BootstrapComponent';
import reportWebVitals from './reportWebVitals';
// import First from "./FirstComponent";
// import Operation from './OperationComponent';
// import { Student } from './StudentComponent';
// import { Employee } from './FunctionComponent/EmployeeComponent';
import { Common } from './RoutingDemo/CommonComponent';
// import { Employee } from './Api/EmployeeComponent';
// import { Parent } from './NestedComponents/ParentComponent';
// import { Employee } from './NestedComponents/EmployeeComponent';
// import { ModalDesign } from './BootstrapDemo/ModalComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Common />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
