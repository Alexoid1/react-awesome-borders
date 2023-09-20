import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import Border from "./Border";

import "./TestComponent.css";

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <Border>

      <h1 data-testid="test-component__heading" className="heading">
        "hello"
      </h1>
     
   
  </Border>
);

export default TestComponent;
