import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import CovidCase from '../components/covidCaseHome/covidCase';
import store from '../redux/configureStore';

it('render covid-case', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <CovidCase />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
