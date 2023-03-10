import { render } from '@testing-library/react';
import React from 'react';
import Modal from '..';

describe('Modal', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
  });
});
