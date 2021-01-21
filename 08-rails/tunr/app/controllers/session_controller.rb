class SessionController < ApplicationController
  def new
  end

  def create
    #find the user BY EMAIL ADDRESS
    user = User.find_by :email => params[:email]
    # if the user exists AND the encrypted(password) == database.password
    if user.present? && user.authenticate(params[:password])
      #remember this user
      session[:user_id] = user.id
      redirect_to root_path
    else
      flash[:error] = 'Invalid username or password' ## last for 1 page
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
