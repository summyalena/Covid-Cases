import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/headers/headers';

it('test-routers-headers', () => {
  const memory = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  const tree = memory.toJSON();
  expect(tree).toMatchSnapshot();
});
