# Meal Time

Meal Time is a social media platform dedicated to creating recipes and sharing with friends and family, while being able to create shopping lists and add and remove ingredients. 

You can sign up for a Meal Time account [here](https://meal-time-app.onrender.com/sign)!


*Disclaimer - the application will be slow to start since it is deployed through a free account with Render*


## Installation

Meal Time is using Ruby's 2.7.4 version, Rails 7.0.4.2, and PostgreSQL 14.6 (Homebrew)

You can check your local machine's Ruby, Rails, and Postgres version by typing the following into the terminal individually:

```
$ ruby -v
$ rails -v
$ postgres -V
```

Install the latest version of Ruby, Rails and PostgreSQL in order to get our application to work.

## Usage

### Starting the Back End
To start the back end, simply navigate to your cloned repo. 

And let's run the following:
```
bundle install
```
This will download all the dependencies within Rails for the application to run!


After everything has been installed, we can run the following in the terminal:
```
$ rails db:migrate db:seed
```
This will create the necessary migrations for the tables within the API and will seed dummy data

After the migration, you can start up the server:

```
$ rails s
```

You will be hosting the API on port 3000, so make sure that it is available.

### Starting the Front End
To start the React front end, you can run the following code in a new terminal:

```
npm install --prefix client
```

This will download all the dependencies within Foodies to run the front end. 

After the dependencies have been installed, go ahead and run the following in the terminal in order to start the front end application:

```
npm start --prefix client
```

Great! The front end will be running on port 4000 and you should see the following image: 

![Image_Of_App](https://drive.google.com/file/d/1wWo40GAI8ZgxZxVq7D8CuPVNUIgbTygb/view?usp=share_link)

#### Signing Up for an Account

Users can simply sign up for an account by clicking on the signup link at the top right corner and filling out the following form:

![Screenshot_Signup_Form](https://drive.google.com/file/d/122dpWDaJJR6DuYLh8opYm2NiIvFkGlKP/view?usp=sharing)

#### Follow another user

Users can scroll through recipes on their timeline and follow another user by clicking the follow. 

![Screenshot_Follow_Feature](https://drive.google.com/file/d/1FYtjRCnzUryKTeWPGXjCcF9YY7iT5UB5/view?usp=share_link)

#### Unfollow a user

Users can also unfollow other users by navigating to their profile page and unfollow. 

#### Create, Edit and Delete New Recipes

Users can create, edit and delete new recipes. 

They can find the form to create a new recipe through the 'My Recipes' navigation as well as the delete button on the individual cards.

In order to edit the recipe, they will need to navigate to the individual cards and click on 'more details', there they can find the edit form for the recipes and add ingredients to the recipe. 

#### Manage Shopping Lists

Users have the option to create shopping lists, while being able to add and delete items from the list.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

