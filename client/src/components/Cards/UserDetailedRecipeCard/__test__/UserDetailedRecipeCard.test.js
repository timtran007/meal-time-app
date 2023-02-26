import { render, screen } from '@testing-library/react';
import UserDetailedRecipeCard from '../UserDetailedRecipeCard'

describe('UserDetailedRecipeCard', () => {

    it('renders the title of the recipe', () => {
        render(<UserDetailedRecipeCard />);
        const title = screen.getByText(/title/i)
        expect(title).toBeInTheDocument()
    })

    it('renders recipe ingredients in a list', () => {
        render(<UserDetailedRecipeCard />);
        const lists = screen.getByRole('list')
        expect(lists).toBeInTheDocument
    })

    it('renders the instructions of the recipe', () => {
        render(<UserDetailedRecipeCard />);
        const instructions = screen.getByText(/instructions/i)
        expect(instructions).toBeInTheDocument()
    })

    it('renders the prepTime of the recipe', () => {
        render(<UserDetailedRecipeCard />);
        const prepTime = screen.getByText(/prep time/i)
        expect(prepTime).toBeInTheDocument()
    })

    it('renders the cookTime of the recipe', () => {
        render(<UserDetailedRecipeCard />);
        const cookTime = screen.getByText(/cook time/i)
        expect(cookTime).toBeInTheDocument()
    })

    it('renders the likes of the recipe', () => {
        render(<UserDetailedRecipeCard />);
        const likes = screen.getByText(/likes/i)
        expect(likes).toBeInTheDocument()
    })
})