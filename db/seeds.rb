# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Listing.destroy_all

10.times do
    User.create!(
        email: Faker::Internet.free_email,
        password: Faker::Blockchain::Bitcoin.address
    )
end

20.times do 
    Listing.create!(
        address: Faker::Address.street_name,
        zipcode: Faker::Address.zip,
        description: Faker::Quote.famous_last_words,
        city: Faker::Address.city,
        price: rand(1..1000000),
        seller_id: 117,
        status: "for_sale"

    )
end

