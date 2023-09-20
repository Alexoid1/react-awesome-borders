import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import Border from "./Border";

import "./TestComponent.css";

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <Border width="200px" height="500px" borderWidth="2px">
    <div data-testid="test-component" className="test-component">
      <h1 data-testid="test-component__heading" className="heading">
        {heading}
      </h1>
      </div>
   
  </Border>
);

export default TestComponent;
