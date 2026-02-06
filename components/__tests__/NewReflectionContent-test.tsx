import React from "react";
import renderer, { act } from "react-test-renderer";
import { Provider } from "jotai";

import { NewReflectionContent } from "../NewReflectionContent";
import { currentReflectionInput } from "../../atoms/atoms";

const renderWithState = (handleSubmit: jest.Mock) =>
  renderer.create(
    <Provider initialValues={[[currentReflectionInput, ""]]}>
      <NewReflectionContent handleSubmit={handleSubmit} />
    </Provider>,
  );

it("submits on enter and clears the input", () => {
  const handleSubmit = jest.fn();
  let tree: renderer.ReactTestRenderer | undefined;

  act(() => {
    tree = renderWithState(handleSubmit);
  });

  if (!tree) {
    throw new Error("Expected renderer tree to be created");
  }

  const input = tree.root.findByProps({ testID: "reflection-input" });

  act(() => {
    input.props.onChangeText("A new reflection");
  });

  act(() => {
    input.props.onKeyPress({
      nativeEvent: { key: "Enter", shiftKey: false },
      preventDefault: jest.fn(),
    });
  });

  expect(handleSubmit).toHaveBeenCalledWith("A new reflection");
  const updatedInput = tree.root.findByProps({ testID: "reflection-input" });
  expect(updatedInput.props.value).toBe("");
});

it("submits on button press and clears the input", () => {
  const handleSubmit = jest.fn();
  let tree: renderer.ReactTestRenderer | undefined;

  act(() => {
    tree = renderWithState(handleSubmit);
  });

  if (!tree) {
    throw new Error("Expected renderer tree to be created");
  }

  const input = tree.root.findByProps({ testID: "reflection-input" });
  const submitButton = tree.root.findByProps({ testID: "reflection-submit" });

  act(() => {
    input.props.onChangeText("Second reflection");
  });

  act(() => {
    submitButton.props.onPress();
  });

  expect(handleSubmit).toHaveBeenCalledWith("Second reflection");
  const updatedInput = tree.root.findByProps({ testID: "reflection-input" });
  expect(updatedInput.props.value).toBe("");
});
