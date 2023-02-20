# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

tim = User.create(name: 'Tim', email: 'tim@gmail.com')
ted = User.create(name: 'Ted', email: 'ted@gmail.com')
vanessa = User.create(name: 'Vanessa', email: 'vanessa@gmail.com')
noah = User.create(name: 'Noah', email: 'noah@gmail.com') 

FollowingShip.create(user_1: noah, user_2: tim)
FollowingShip.create(user_1: vanessa, user_2: tim)
FollowingShip.create(user_1: ted, user_2: tim)

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



monday_night_groceries = ShoppingList.create(name:'Mondays Groceries', user_id: tim.id)


ribeye_16oz = Ingredient.create(name: 'ribeye', category: 'meats', quantity: '16', measurement: 'ounces', recipe_id: ribeye_steak.id, shopping_list_id: monday_night_groceries.id)

salt_1_TBSP = Ingredient.create(name: 'salt', category: 'spices', quantity: '1', measurement: 'tablespoon', recipe_id: ribeye_steak.id, shopping_list_id: monday_night_groceries.id)

pepper_1_tsp = Ingredient.create(name: 'pepper', category: 'spices', quantity: '1', measurement: 'teaspoon', recipe_id: ribeye_steak.id, shopping_list_id: monday_night_groceries.id)

butter_1_TBSP = Ingredient.create(name: 'butter', category: 'dairy', quantity: '1', measurement: 'tablespoon', recipe_id: ribeye_steak.id, shopping_list_id: monday_night_groceries.id)

lime = Ingredient.create(name: 'lime', category: 'produce', quantity: "3", measurement: 'individual', recipe_id: brazilian_lemonade.id, shopping_list_id: monday_night_groceries.id)

condensed_milk_third_cup = Ingredient.create(name: 'condensed milk', category: 'baking', quantity: '1/3', measurement: 'cup', recipe_id: brazilian_lemonade.id, shopping_list_id: monday_night_groceries.id)

sugar_third_cup = Ingredient.create(name: 'sugar', category: 'baking', quantity: '1/3', measurement: 'cup', recipe_id: brazilian_lemonade.id, shopping_list_id: monday_night_groceries.id)

water_4_cups = Ingredient.create(name: 'water', category: 'drinks', quantity: '4', measurement: 'cup', recipe_id: brazilian_lemonade.id, shopping_list_id: monday_night_groceries.id )