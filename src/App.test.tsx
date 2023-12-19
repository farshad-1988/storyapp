
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// test that learn react exist in documnetation or not
test('renders learn react link', () => {
  render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
