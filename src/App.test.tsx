import React from 'react';
import { render, fireEvent,waitForElement } from '@testing-library/react';
import App from './App';


test('renders the app without crashing', () => {
  const { container } = render(<App />);
  const listItems = container.querySelectorAll('li');
  const buttons = container.querySelectorAll('button');

  expect(listItems.length).toBe(8)
  expect(buttons.length).toBe(8);
});
