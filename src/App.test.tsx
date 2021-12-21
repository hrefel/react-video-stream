import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import VideoPlayer from './App';

test('renders learn react link', () => {
  render(<VideoPlayer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
