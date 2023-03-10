import { render } from '@testing-library/react';
import React from 'react';
import ClickIcon from '..';

describe('ClickIcon', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ClickIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
