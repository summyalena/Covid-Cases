import { fetchCovidCases } from '../redux/covid/covid';

describe('test async function', () => {
  test('', () => {
    expect(fetchCovidCases()).toEqual(expect.any(Function));
  });
});
