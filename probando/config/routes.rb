Rails.application.routes.draw do
  get 'landing/index'
  root 'landing#index'
  resources :messages, only: [:new, :create]
end
