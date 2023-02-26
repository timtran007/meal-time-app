import { render, screen } from '@testing-library/react';
import DetailedRecipeCard from '../DetailedRecipeCard'

describe('DetailedRecipeCard', () => {

    it('renders the title of the recipe', () => {
        render(<DetailedRecipeCard />);
        const title = screen.getByText(/title/i)
        expect(title).toBeInTheDocument()
    })

    it('renders recipe ingredients in a list', () => {
        render(<DetailedRecipeCard />);
        const lists = screen.getByRole('list')
        expect(lists).toBeInTheDocument
    })

    it('renders the instructions of the recipe', () => {
        render(<DetailedRecipeCard />);
        const instructions = screen.getByText(/instructions/i)
        expect(instructions).toBeInTheDocument()
    })

    it('renders the prepTime of the recipe', () => {
        render(<DetailedRecipeCard />);
        const prepTime = screen.getByText(/prep time/i)
        expect(prepTime).toBeInTheDocument()
    })

    it('renders the cookTime of the recipe', () => {
        render(<DetailedRecipeCard />);
        const cookTime = screen.getByText(/cook time/i)
        expect(cookTime).toBeInTheDocument()
    })

    it('renders the likes of the recipe', () => {
        render(<DetailedRecipeCard />);
        const likes = screen.getByText(/likes/i)
        expect(likes).toBeInTheDocument()
    })
})

