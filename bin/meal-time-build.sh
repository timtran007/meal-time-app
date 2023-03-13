#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
# bundle exec rake assets:precompile # These lines are commented out because we have an API only app
# bundle exec rake assets:clean
bundle exec rails db:migrate
bundle exec rails db:seed