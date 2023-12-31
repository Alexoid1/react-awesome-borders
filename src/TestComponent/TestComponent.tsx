import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import BorderSnake from "./BorderSnake";

import "./TestComponent.css";

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <BorderSnake  borderWidth="2px">
    <div data-testid="test-component" className="test-component">
      <h1 data-testid="test-component__heading" className="heading">
        {heading}
      </h1>
      </div>
   
  </BorderSnake>
);

export default TestComponent;
