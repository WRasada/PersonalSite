class Contact < ActiveRecord::Base
	# Contact form validations
	validates :name, presence: true, length: { minimum: 2}
	validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
	validates :comments, presence: true
end