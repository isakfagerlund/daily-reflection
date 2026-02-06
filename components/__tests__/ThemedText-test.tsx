import * as React from 'react';
import renderer, { act } from 'react-test-renderer';
import * as ReactNative from 'react-native';

import { ThemedText } from '../ThemedText';

const useColorSchemeSpy = jest.spyOn(ReactNative, 'useColorScheme');

beforeEach(() => {
  useColorSchemeSpy.mockReturnValue('light');
});

it(`renders correctly`, () => {
  let tree: renderer.ReactTestRenderer | undefined;

  act(() => {
    tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>);
  });

  if (!tree) {
    throw new Error('Expected renderer tree to be created');
  }

  expect(tree.toJSON()).toMatchSnapshot();
});
