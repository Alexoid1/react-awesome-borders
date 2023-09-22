import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import ChromaticBorder from "./ChromaticBorder";

import "./TestComponent.css";

const TestComponent2: React.FC<TestComponentProps> = ({ heading, content }) => (
  <ChromaticBorder >
    <div data-testid="test-component" className="test-component">
      <h1 data-testid="test-component__heading" className="heading">
        {heading}
      </h1>
      </div>
   
  </ChromaticBorder>
);

export default TestComponent2;