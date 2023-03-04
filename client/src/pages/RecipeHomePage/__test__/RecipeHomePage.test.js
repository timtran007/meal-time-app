import { render, screen } from '@testing-library/react';
import RecipeHomePage from '../RecipeHomePage'


describe('Recipe Page', () => {

    it('renders the Recipes page successfully', async () => {
      render(<RecipeHomePage recipe={[]}/>);
      const button =  screen.getByRole('heading', {name: /recipe/i});
      expect(button).toBeInTheDocument();
    });

})
