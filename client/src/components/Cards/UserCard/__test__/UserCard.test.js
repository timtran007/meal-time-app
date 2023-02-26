import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard'

describe('UserCard', () => {

    it('renders User Card', () => {
        render(<UserCard />);
        const imageElement = screen.getByRole("img")
        expect(imageElement).toBeInTheDocument()
    })
    
})

