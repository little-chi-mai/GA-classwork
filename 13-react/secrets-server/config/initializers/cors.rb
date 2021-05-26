# This code was jacked from rack-cors github README.

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' #This actually needs an explicit list of real URLs on Heroku
    resource '*',
      :headers => :any,
      :methods => %i(get post put patch delete options head) # array of symbol
  end
end
