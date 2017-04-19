class CatRentalRequest < ApplicationRecord
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: ["PENDING", "APPROVED", "DENIED"]
  #validate does_not_overlap_approved_request

  belongs_to :cat, dependent: :destroy,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: "Cat"

  private

  def overlapping_requests
    if self.persisted?
      CatRentalRequest
      .where("cat_id = #{self.cat_id}")
      .where("#{self.id} != id")
      .where(<<-SQL)
        (#{self.end_date} > start_date AND
        #{self.start_date} < end_date) OR
        (end_date BETWEEN #{self.start_date} AND #{self.end_date}) OR
        (start_date BETWEEN #{self.start_date} AND #{self.end_date})
        SQL
    else
      CatRentalRequest
        .where("#{self.end_date} > start_date AND
          #{self.start_date} < end_date AND cat_id = #{self.cat_id}")
    end
  end

  def overlapping_approved_requests
    overlapping_requests.where(status == "APPROVED")
  end

  def does_not_overlap_approved_request
    if overlapping_approved_requests.exists?
      errors[:base] << "Cat can't be in two places at once"
    end
  end

end
