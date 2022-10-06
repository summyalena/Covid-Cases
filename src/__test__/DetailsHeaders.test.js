import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import DetailsHeader from '../components/DetailsHeader/DetailsHeader';

it('test-details-headers', () => {
  const memory = renderer.create(
    <MemoryRouter>
      <DetailsHeader />
    </MemoryRouter>,
  );
  const tree = memory.toJSON();
  expect(tree).toMatchSnapshot();
});
