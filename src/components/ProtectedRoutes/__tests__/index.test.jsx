import { render } from '@testing-library/react';
import React from 'react';
import ProtectedRoutes from '..';

describe('ProtectedRoutes', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProtectedRoutes />);
    expect(asFragment()).toMatchSnapshot();
  });
});
