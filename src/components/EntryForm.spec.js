import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';
import userEvent from '@testing-library/user-event';

describe('EntryForm', () => {
  it('shows a text and the author', () => {
    const callback = jest.fn();
    render(<EntryForm onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create new entry' });
    expect(form).toBeInTheDocument();

    const input = screen.getByLabelText('Entry text');
    userEvent.type(input, 'Lorem ipsum dolor sit.{enter}');
    expect(form).toContainElement(input);

    expect(callback).toHaveBeenCalledWith('Lorem ipsum dolor sit.');
  });
});
