import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Functional from "./Functional";
import ClassComp from "./ClassComp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <Functional />
      <ClassComp />
    </div>
  </StrictMode>
);

///add settiem out and makeit work for
// new number
//for class comp
//  clicker = () =>{
//  this.setState({count: this.state.count+1})
// }
