import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';
import userEvent from '@testing-library/user-event';

describe('EntryForm', () => {
  it('shows a form with an input and a button', () => {
    render(<EntryForm />);

    const input = screen.getByLabelText(/Create/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    expect(submitButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  it('info', () => {
    const handleSubmit = jest.fn();
    render(<EntryForm onEntry={handleSubmit} />);

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
