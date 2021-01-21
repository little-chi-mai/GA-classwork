class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params #secured params of the form
    redirect_to artist #show page
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params
    redirect_to artist
  end

  def show
    @artist = Artist.find params[:id]
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end

  private # The following method(s) aren't accessible outside this class (so routes can't point to them)
  def artist_params
    # Strong parameters: white list of sanitised input -- stuff we are happy to accept from the user.
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  end
end
