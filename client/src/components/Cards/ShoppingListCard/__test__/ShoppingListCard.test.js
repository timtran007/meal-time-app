import { render, screen } from '@testing-library/react';
import ShoppingListCard from '../ShoppingListCard'

describe('ShoppingListCard', () => {

    it('renders Shopping List Card', () => {
        render(<ShoppingListCard />);
        const heading = screen.getByRole( 'heading', { name: /items to get/i })
        expect(heading).toBeInTheDocument()
    })
    
})

