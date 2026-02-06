import * as React from 'react';
import renderer, { act } from 'react-test-renderer';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

import { ThemedText } from '../ThemedText';

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => jest.fn());

const mockedUseColorScheme = useColorScheme as jest.Mock;

beforeEach(() => {
  mockedUseColorScheme.mockReturnValue('light');
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
