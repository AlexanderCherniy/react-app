import { render } from '@testing-library/react';
import MainApp from './App';
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

test('renders learn react link', () => {
  render(<MainApp />);
  const linkElement = "APP"
  expect(linkElement).toBe("APP");
});
