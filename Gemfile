source 'https://rubygems.org'

ruby '2.1.2'
gem 'mysql2'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby
gem 'foundation-rails'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
#gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

group :production do
  # gem 'unicorn'
  # gem 'unicorn-worker-killer'
  # gem 'rack-timeout'
  # gem 'rails_12factor'
  # gem 'asset_sync'
end

group :test, :development do
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'byebug'
  gem 'looksee'
  gem 'awesome_print'

  gem 'rspec_api_documentation'
  gem 'apitome'
  gem 'bullet'
end

group :test do
  gem 'capybara'
  gem 'shoulda-matchers', require: false
  gem 'vcr'
  gem 'webmock'
  gem 'simplecov', '~> 0.9.0', require: false
  # gem 'fakeredis', require: 'fakeredis/rspec'
  # gem 'email_spec'
end

group :development do
  gem "spring"
  gem "spring-commands-rspec"

  gem 'quiet_assets'
  gem "brakeman", require: false
  gem 'rack-mini-profiler'
  gem "rubycritic", :require => false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

