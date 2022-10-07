import { actions } from '../redux/covid/covid';

describe('test async function', () => {
  test('', () => {
    expect(actions.filterCases(undefined)).toEqual({
      payload: undefined,
      type: 'covid/filterCases',
    });
  });
});
