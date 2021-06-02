class User < ApplicationRecord
    attr_reader :password

    validates :username, :session_token, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' } 
    validates :password, length: {minimun: 6}, allow_nil: true
    before_validation :ensure_session_token

    def generate_session_token 
        SecureRandom.base64
    end

    def self.find_by_credentials(username, password) 
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = Password
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
