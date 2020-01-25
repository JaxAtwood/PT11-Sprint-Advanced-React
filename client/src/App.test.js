import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("is here", () => {
  const { getByTestId, getByText } = render(<App />);

  expect(getByTestId("testtag")).toHaveTextContent("SPRINT ADVANCED REACT");
  expect(getByText("SPRINT ADVANCED REACT")).toHaveTextContent("SPRINT ADVANCED REACT");
  
});

test("next", () => {
  const { getByText } = render(<App />);

  expect(getByText("World Cup Soccer Players!")).toHaveTextContent("World Cup");
})