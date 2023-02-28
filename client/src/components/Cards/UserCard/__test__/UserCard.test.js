import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard'

describe('UserCard', () => {

    it('renders User Card', () => {
        render(<UserCard user={[]}/>);
        const textElement = screen.getByText(/email/i)
        expect(textElement).toBeInTheDocument()
    })
    
})

