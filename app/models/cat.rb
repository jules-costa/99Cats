class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: ['brown', 'black', 'white', 'orange', 'grey']
  validates :sex, inclusion: ['M', 'F']

  def age
    (Time.now.to_date.year - self.birth_date.year)
  end

end
