import { render } from '@testing-library/react';
import React from 'react';
import Entry from '..';

describe('Entry', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Entry />);
    expect(asFragment()).toMatchSnapshot();
  });
});
