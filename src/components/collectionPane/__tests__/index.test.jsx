import { render } from '@testing-library/react';
import React from 'react';
import CollectionPane from '..';

describe('CollectionPane', () => {
  it('should render the Home page correctly', () => {
    const { asFragment } = render(<CollectionPane />);
    expect(asFragment()).toMatchSnapshot();
  });
});
