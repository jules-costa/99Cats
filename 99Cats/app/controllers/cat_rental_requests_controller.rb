class CatRentalRequestsController < ApplicationController

  def index
    @cats = Cat.all
    @cat_rentals = CatRentalRequest.all
  end

  def show
    render :show
  end

  def new
    @cats = Cat.all
    @cat_rental = CatRentalRequest.new
  end

  def create
    @cat_rental = CatRentalRequest.new(cat_rental_params)
    if @cat_rental.save
      redirect_to cat_url(@cat_rental)
    else
      render :show
    end
  end

  private
  def cat_rental_params
    params.require(:cat_rental).permit(:cat_id, :start_date, :end_date, :status)
  end
end
