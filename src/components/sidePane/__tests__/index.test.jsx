import { render } from '@testing-library/react';
import React from 'react';
import SidePane from '..';

describe('sidepane', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SidePane />);
    expect(asFragment()).toMatchSnapshot();
  });
});
