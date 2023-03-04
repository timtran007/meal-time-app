import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipePage from '../RecipePage'
const recipeProps = {
  id: 3,
  title: "Pork Dumplings",
image_url: "https://www.spendwithpennies.com/wp-content/uploads/2020/07/Pork-Dumplings-2-SpendWithPennies-3.jpg",
instructions: "Step 1: shred cabbage into a bowl, salt and let sit.\nStep 2: mix ground pork and combine sauces, oils, and seasoning together\nStep 3: squeeze and drain cabbage to chop and mix into ground pork mixture\nStep 4: get out wonton wrappers and add a tablespoon of ground pork mixture and close it up\nStep 5: set aside how many you want to make and place extra on baking sheet in the freezer to freeze for 2-3 hours\nStep 6: get pan hot on medium high and add cooking oil brown 30 seconds on each side\nStep 7: get 2/3 cups of water and pour into pan and cover for 6 minutes\nStep 8: remove cover and allow exterior to get crispy by allowing 15-20 seconds on each side when water has evaporated\nStep 9: serve.",
cook_time_in_minutes: 10,
prep_time_in_minutes: 20,
likes: 1,
user: {id: 2,}
}


const userProp = {
  id: 3,
name: "Ted",
email: "ted1@gmail.com",
image_url: null,
}


const followingProp = {
  id: 2,
name: "Ted",
email: "ted@gmail.com",
image_url: null,
recipes: [
{
  id: 3,
  title: "Pork Dumplings",
image_url: "https://www.spendwithpennies.com/wp-content/uploads/2020/07/Pork-Dumplings-2-SpendWithPennies-3.jpg",
instructions: "Step 1: shred cabbage into a bowl, salt and let sit.\nStep 2: mix ground pork and combine sauces, oils, and seasoning together\nStep 3: squeeze and drain cabbage to chop and mix into ground pork mixture\nStep 4: get out wonton wrappers and add a tablespoon of ground pork mixture and close it up\nStep 5: set aside how many you want to make and place extra on baking sheet in the freezer to freeze for 2-3 hours\nStep 6: get pan hot on medium high and add cooking oil brown 30 seconds on each side\nStep 7: get 2/3 cups of water and pour into pan and cover for 6 minutes\nStep 8: remove cover and allow exterior to get crispy by allowing 15-20 seconds on each side when water has evaporated\nStep 9: serve.",
cook_time_in_minutes: 10,
prep_time_in_minutes: 20,
likes: 1,
user:{id: 2,} 

}, 
{
  id: 4,
  title: "Pork Dumplings",
image_url: "https://www.spendwithpennies.com/wp-content/uploads/2020/07/Pork-Dumplings-2-SpendWithPennies-3.jpg",
instructions: "Step 1: shred cabbage into a bowl, salt and let sit.\nStep 2: mix ground pork and combine sauces, oils, and seasoning together\nStep 3: squeeze and drain cabbage to chop and mix into ground pork mixture\nStep 4: get out wonton wrappers and add a tablespoon of ground pork mixture and close it up\nStep 5: set aside how many you want to make and place extra on baking sheet in the freezer to freeze for 2-3 hours\nStep 6: get pan hot on medium high and add cooking oil brown 30 seconds on each side\nStep 7: get 2/3 cups of water and pour into pan and cover for 6 minutes\nStep 8: remove cover and allow exterior to get crispy by allowing 15-20 seconds on each side when water has evaporated\nStep 9: serve.",
cook_time_in_minutes: 10,
prep_time_in_minutes: 20,
likes: 1,
user:{id: 2,} 

}]
}

const userProps = {
  id: 1,
  name: "Tim",
  email: "tim@gmail.com",
  image_url: null
}


describe('Recipe Page', () => {

    it('renders the Recipes page successfully', async () => {
      render(<RecipePage recipe={recipeProps} user={userProps} following={followingProp}/>);
      const button =  await screen.findByRole('heading', {name: /recipe/i});
      expect(button).toBeInTheDocument();
    });

})
