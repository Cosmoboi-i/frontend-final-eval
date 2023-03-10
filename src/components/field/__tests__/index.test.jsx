import { render } from '@testing-library/react';
import React from 'react';
import Field from '..';

describe('Field', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Field />);
    expect(asFragment()).toMatchSnapshot();
  });
});
