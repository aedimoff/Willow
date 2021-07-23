# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email)
#
class User < ApplicationRecord
    attr_reader :password

    validates :email, :session_token, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' } 
    validates :password, length: {minimum: 6}, allow_nil: true
    before_validation :ensure_session_token

    has_many :listings,
        foreign_key: :seller_id,
        class_name: :Listing

    has_many :saved_listings,
        foreign_key: :user_id, 
        class_name: :Save

    def generate_session_token 
        SecureRandom.base64
    end

    def self.find_by_credentials(email, password) 
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        bcrypt = BCrypt::Password.new(self.password_digest)
        bcrypt.is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end
end
