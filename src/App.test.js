import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { render } from "enzyme";
import AppDefault from "./app";
import AppWeb from "./app.web";

test("renders correctly", () => {
  const appDefaultTree = render(<AppDefault />);
  const appWebTree = render(<AppWeb />);
  expect(appDefaultTree.text()).toBe(appWebTree.text());
});
