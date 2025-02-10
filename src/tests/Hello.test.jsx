import { render, screen } from '@testing-library/react';
import Hello from '../components/Hello';
import { test, expect } from 'vitest';

test ('Affiche "Hello John!" quand name="John', () => {
    render(<Hello name="John" />);
    const helloElement = screen.getByText(/Hello, John!/i);
    expect(helloElement).toBeInTheDocument();
})