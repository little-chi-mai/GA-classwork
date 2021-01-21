class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params # TODO: handle errors

    #Fat models

    if @user.save
      redirect_to root_path
    end
    redirect_to root_path #TODO: redirect somewhere better
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
