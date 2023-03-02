class UserFollowShipSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url, :following, :followers, :shopping_lists, :recipes, :following_ships

  def following
    object.followings.map do |following| {
      id: following.id,
      name: following.name,
      email: following.email,
      image_url: following.image_url,
      recipes: following.recipes,
      following_ships: following.following_ships
      }
    end
  end

  def followers
    object.followers.map do |follower| {
      id: follower.id,
      name: follower.name,
      email: follower.email,
      image_url: follower.image_url,
    }
    end
  end

  def shopping_lists
    object.shopping_lists.map do |shopping_list| {
      id: shopping_list.id,
      name: shopping_list.name,
      ingredients: shopping_list.ingredients,
    }
    end
  end

  def recipes
    object.recipes.map do |recipe| {
      id: recipe.id,
      title: recipe.title,
      instructions: recipe.instructions,
      image_url: recipe.image_url,
      cook_time_in_minutes: recipe.cook_time_in_minutes,
      prep_time_in_minutes: recipe.prep_time_in_minutes,
      likes: recipe.likes,
      recipe_ingredients: recipe.recipe_ingredients
    }
    end
  end

 
end
