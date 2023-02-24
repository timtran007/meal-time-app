# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

tim = User.create(name: 'Tim', email: 'tim@gmail.com', password: '12345')
ted = User.create(name: 'Ted', email: 'ted@gmail.com', password: '12345')
vanessa = User.create(name: 'Vanessa', email: 'vanessa@gmail.com', password: '12345')
noah = User.create(name: 'Noah', email: 'noah@gmail.com', password: '12345') 

FollowingShip.create(user_1_id: noah.id, user_2_id: tim.id)
FollowingShip.create(user_1_id: vanessa.id, user_2_id: tim.id)
FollowingShip.create(user_1_id: ted, user_2_id: tim.id)

ribeye_steak = Recipe.create(title: 'Perfect Ribeye', instructions: 'Step 1: Bring ribeye steak out and season with salt and Pepper
Step 2: Heat up castiron pan on High Heat until smoke
Step 3: add in neutral oil and wait until it starts to smoke
Step 4: place ribeye in castiron skillet to develop crust (about 3 minutes)
Step 5: flip ribeye and develop crust on other side
Step 6: drop in butter and baste until internal temperature reaches 120
Step 7: let steak rest for 10 minutes', cook_time_in_minutes: 10, prep_time_in_minutes: 5, user_id: tim.id, likes: 0)

brazilian_lemonade = Recipe.create(title: 'Brazilian Lemonade', instructions: 'Step 1: cut off lime ends
Step 2: cut into 8 wedges
Step 3: combine limes into blender with water, condensed milk and sugar, 
Step 4: pulse 5 to 6 times,
Step 5: strain out drink and discard pieces in the strainer
Step 6: pour over ice and serve', cook_time_in_minutes: 2, prep_time_in_minutes: 8, likes: 0, user_id: tim.id)

pork_dumplings = Recipe.create(title: 'Pork Dumplings', instructions: 'Step 1: shred cabbage into a bowl, salt and let sit.
Step 2: mix ground pork and combine sauces, oils, and seasoning together
Step 3: squeeze and drain cabbage to chop and mix into ground pork mixture
Step 4: get out wonton wrappers and add a tablespoon of ground pork mixture and close it up
Step 5: set aside how many you want to make and place extra on baking sheet in the freezer to freeze for 2-3 hours
Step 6: get pan hot on medium high and add cooking oil brown 30 seconds on each side
Step 7: get 2/3 cups of water and pour into pan and cover for 6 minutes
Step 8: remove cover and allow exterior to get crispy by allowing 15-20 seconds on each side when water has evaporated
Step 9: serve.', cook_time_in_minutes: 10, prep_time_in_minutes: 20, likes: 0, user_id: ted.id)

spaghetti = Recipe.create(title: 'Spaghetti', instructions: 'Step 1: Bring pan of water to a boil, salt and add olive oil and follow pasta instructions
Step 2: put sauce man on medium high and then add oil
Step 3: add ground beef and season it with seasoning mixture
Step 4: brown ground beef and drain
Step 5: add ground beef back to sauce pan and add in spaghetti sauce
Step 6: drain pasta and add pasta to sauce and meat mixture
Step 7: let simmer for 2-3 minutes on medium low
Step 8: add parmesan, season to taste and serve', cook_time_in_minutes: 20, prep_time_in_minutes: 5, likes: 0, user_id: ted.id)

fajita_beef_tacos = Recipe.create(title: 'Fajita Beef Tacos', instructions: 'Step 1: finely chop and dice shallots
Step 2: Slice skirt steak against grain and cube
Step 3: season with salt and set aside
Step 4: heat up pan medium high and then add oil
Step 5: add in shallots and let toast for 2-3 minutes, making sure it does not burn
Step 6: add in cubed skirt steak and turn heat to medium low cooking until liquid releases and meat is brown
Step 7: cover pan and let simmer for 15 to 20 minutes or until tender
Step 8: uncover and turn to medium high making sure liquid is evaporated then squeeze in lemon juice
Step 9: serve on warmed up flour or corn tortillas', cook_time_in_minutes: 30, prep_time_in_minutes: 20, likes: 0, user_id: vanessa.id)

monday_night_groceries = ShoppingList.create(name:'Mondays Groceries', user_id: tim.id)

ribeye_16oz = RecipeIngredient.create(name: 'ribeye', category: 'meats', quantity: '16', measurement: 'ounces', recipe_id: ribeye_steak.id)

salt_1_TBSP = RecipeIngredient.create(name: 'salt', category: 'spices', quantity: '1', measurement: 'tablespoon', recipe_id: ribeye_steak.id)

pepper_1_tsp = RecipeIngredient.create(name: 'pepper', category: 'spices', quantity: '1', measurement: 'teaspoon', recipe_id: ribeye_steak.id)

butter_1_TBSP = RecipeIngredient.create(name: 'butter', category: 'dairy', quantity: '1', measurement: 'tablespoon', recipe_id: ribeye_steak.id)

lime = RecipeIngredient.create(name: 'lime', category: 'produce', quantity: "3", measurement: 'individual', recipe_id: brazilian_lemonade.id)

condensed_milk_third_cup = RecipeIngredient.create(name: 'condensed milk', category: 'baking', quantity: '1/3', measurement: 'cup', recipe_id: brazilian_lemonade.id)

sugar_third_cup = RecipeIngredient.create(name: 'sugar', category: 'baking', quantity: '1/3', measurement: 'cup', recipe_id: brazilian_lemonade.id)

water_4_cups = RecipeIngredient.create(name: 'water', category: 'drinks', quantity: '4', measurement: 'cup', recipe_id: brazilian_lemonade.id)


ribeye_16oz = Ingredient.create(name: 'ribeye', category: 'meats', quantity: '16', measurement: 'ounces', shopping_list_id: monday_night_groceries.id)

salt_1_TBSP = Ingredient.create(name: 'salt', category: 'spices', quantity: '1', measurement: 'tablespoon', shopping_list_id: monday_night_groceries.id)

pepper_1_tsp = Ingredient.create(name: 'pepper', category: 'spices', quantity: '1', measurement: 'teaspoon', shopping_list_id: monday_night_groceries.id)

butter_1_TBSP = Ingredient.create(name: 'butter', category: 'dairy', quantity: '1', measurement: 'tablespoon', shopping_list_id: monday_night_groceries.id)

lime = Ingredient.create(name: 'lime', category: 'produce', quantity: "3", measurement: 'individual', shopping_list_id: monday_night_groceries.id)

condensed_milk_third_cup = Ingredient.create(name: 'condensed milk', category: 'baking', quantity: '1/3', measurement: 'cup', shopping_list_id: monday_night_groceries.id)

sugar_third_cup = Ingredient.create(name: 'sugar', category: 'baking', quantity: '1/3', measurement: 'cup', shopping_list_id: monday_night_groceries.id)

water_4_cups = Ingredient.create(name: 'water', category: 'drinks', quantity: '4', measurement: 'cup', shopping_list_id: monday_night_groceries.id)