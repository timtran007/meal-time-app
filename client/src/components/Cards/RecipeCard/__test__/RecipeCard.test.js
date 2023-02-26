import { render, screen } from '@testing-library/react';
import RecipeCard from '../RecipeCard'

describe('RecipeCard', () => {

    it('renders card view of a recipe', () => {
        render(<RecipeCard />);
        const textElement = screen.getByText(/total time/i)
        expect(textElement).toBeInTheDocument()
    })
    
})

