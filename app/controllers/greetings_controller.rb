class GreetingsController < ApplicationController
  def greeting
    render json: Greeting.all.sample, status: 200
  end
end
