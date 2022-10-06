import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Details from '../components/details/details';
import store from '../redux/configureStore';

it('testing-covidCase', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
