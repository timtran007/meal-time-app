import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipePage from '../RecipePage'


describe('Recipe Page', () => {

    it('renders the Recipes page successfully', async () => {
      render(<RecipePage recipe={[]}/>);
      const button =  screen.getByRole('heading', {name: /recipe/i});
      expect(button).toBeInTheDocument();
    });

})
