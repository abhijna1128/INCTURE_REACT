import { fireEvent,render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Counter from './Counter';

test('Counter components working Properly', () => {
  render(<Counter />);
  const buttonElement=screen.getByText(/Click me/i);
  fireEvent.click(buttonElement);
  const updatedCount=screen.getByText(/You clicked button 1 times:/i)
  expect(updatedCount).toBeInTheDocument();
});

test('Cheking Button Functionality', async() => {
  render(<Counter />);
  expect(screen.getByText(/Count:0/i)).toBeInTheDocument();

  const button=screen.getByRole("button",{name:/Click me/i});
  await userEvent.click(button);
  expect(screen.getByText(/Count:1/i)).toBeInTheDocument();
});
    