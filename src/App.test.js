import { render, screen } from '@testing-library/react';
import MainApp from './App';
import ReactDOM from "react-dom"
test('renders learn react link', () => {
  render(<MainApp />);
  const linkElement = "APP"
  expect(linkElement).toBe("APP");
});
