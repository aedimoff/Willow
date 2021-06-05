        # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

User.destroy_all
Listing.destroy_all

10.times do
    User.create!(
        email: Faker::Internet.free_email,
        password: Faker::Blockchain::Bitcoin.address
    )
end

20.times do 
    listing = Listing.create!(
        address: Faker::Address.street_name,
        zipcode: Faker::Address.zip,
        description: Faker::Quote.famous_last_words,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        price: rand(1..1000000),
        seller_id: 117,
        status: "for_sale",
        beds: rand(1..6),
        baths: rand(1..3),
        property_type: 'house'
    )

    listing.images.attach(io: open(Faker::LoremFlickr.image(size: "300x200", search_terms: ['house'])), filename: 'house')
end

# Faker::LoremFlickr.image(size: "300x200", search_terms: ['house'])