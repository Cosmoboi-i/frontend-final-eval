import { render } from '@testing-library/react';
import React from 'react';
import ContentPane from '..';

describe('ContentPane', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ContentPane />);
    expect(asFragment()).toMatchSnapshot();
  });
});
