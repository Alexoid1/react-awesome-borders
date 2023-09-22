import React from "react";
import TestComponent2 from "./TestComponent2";

export default {
  title: "TestComponent2"
};

export const WithText = () => (
  <TestComponent2
    heading="I am a test component"
    content={<h2>Made with love by Harvey</h2>}
  />
);

export const WithButtons = () => (
  <TestComponent2
    heading="I have a button"
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);