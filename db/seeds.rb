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

User.create(email: "test@gmail.com", password: "123456")
10.times do
    User.create!(
        email: Faker::Internet.free_email,
        password: Faker::Blockchain::Bitcoin.address
    )
end


property_urls = [
    ["https://photos.zillowstatic.com/fp/7c8aeceb656e1e0ef3e5d561eb5aa7c5-cc_ft_1536.jpg", "https://photos.zillowstatic.com/fp/7c8f725e160ef9f8d9aff811c021f4df-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/6f1e864b93f43b80af98928945aeaf60-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/3a96a1016cd8dfc56362ac448b18366b-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/669e9a91c2f78e2b26856f90860491b9-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/5e3c9e38136164d76a4e996c6314b8f3-cc_ft_1536.jpg", "https://photos.zillowstatic.com/fp/e014ca700f04f02445f57628e32aac24-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/567f286043c653c2947d21bd1ddae65e-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/c54fe47ae748d6574b3c1f0164cb7dbe-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/403ab3013f632ea8478dd2f85f1c00b4-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/59b4f98f5cc871af7994fd552ff0c6be-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/d16a0d114f2dce7ca8ce4a8ed94aa275-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/0b756087e2f876430a2c941817bb077b-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/b2183c00bd4ba6d5ce34b03a7bc1be01-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/51842606bebeb49c9e4e4106ca610f0b-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/71202f67d47b2e0127b748a18f7c188f-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/17d6d46bceba8968338b8443119f8dc9-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/6ee996bbfb37f8c9c49ce346fdd2ba18-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8d86c9094b2e92b59df965c7fb48e6f1-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ba0462fdd401a53dec8975c8a57046ed-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/1343ca278d7b38157872266d2de6fa6f-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/4028876142d67a4a0beb9b15c748d834-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/1a01567309f9330d22e107d46f21107e-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8733673f721ddcd3252a355502d4cf75-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/4b02ef1a472d3adc7c3aff4cfdf41bed-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/d1a8487ffc9723391b4494b635ab276a-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/d16371966de662e7c9cb0a13a26ae438-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/41ab4b60fb7411b158076b94ac290f99-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/4768b68f65bb1e57d3ebac2c11dee990-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ac89652dce079ea0615f210c71e40947-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/5b012adf22f11e379d9e2ee7e6ce9c8a-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/c63da1db35d69c7ff99a64e708fd2521-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/4ffb722e62f36dab7e83028f7422c81b-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/374976a49d5bf8f576bd1274138141e1-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/bf2ba86c762f989748333c34407f4b23-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/c51ca9895c84be0615294e024e28eb82-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/0703409935df7d5f4808b8e747f4419f-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/047da23aff4e87ca426824248dc3341c-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ace0b726b9580fac018d0c19eedf804c-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/290502782ed833dfd7bb972732aa4786-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/8dbd7779cf7181a1a77414eae7a08b22-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/11cd4c8ff1be6b3cb8af71fa9ca2833d-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/874845dbac98f7098d31e6e048085ffa-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ac514f9bd910f0a59a4132dd53801fe3-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8931d2c8b5271856f8c3caeda1d8575e-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/a2ca5cffc0dd09eea8082357a5a62472-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/541a554f8cca9781dcc98e7d7dca6068-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/aa145532d68a87f086aa0a7ef820cc0d-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/d9e3b1ae3afeea1927aad23ec6f0f911-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ef7a07a8c44059a1b778a905150f9437-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/344ce9834de0267788cfca92afa75003-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/0a79c1bef3b04022273a436713967ba6-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/d4dbee058133b15fc8de82ecbbb378b6-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/28e989c2a17895c077effe5544e51249-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ca6e2bf8bbfa8587805b0143cf9e3931-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/df9b78a2a6b581e05a2b37a5ac99dacb-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/acf3411b614aae68a2aa4fc31119e101-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/397328efe39393548562a0e5888fc83d-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/48db70d4b32ca7a3d51168d490df32c2-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/d4fa3857fec5870e57412826898f5617-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/8b667069712522e9d40a1431ea133374-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/bda200d7dfd15be0b1a3c6b8b18eb5f3-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/b7207dc9ca1d909b4d9a15529968879a-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/b595ffbee4356feb9e5f122fa1c063a8-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/2cf880351b277a8147b742adb11dd1b2-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/cce8b71c1da74bd952ec920fdd7f3190-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/60aca41d371cdf8c2f84625048422218-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/f4d303855a01904fdb6df53600960cfd-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/19f2a194d5a925366fb6e33cee6afd38-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8025a4af1bc6475984b0ac56f151135e-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/f7a1dfcbf09e2fbb6356c555e476e1a0-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/518778c8af8afa6bd5e95c391d8fe3a5-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/7f570baa582b6c8cba576d942e892544-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/dc8b1effa03d58bf247c4ff24b437adc-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/55f995734d6743f3a38d5d4e66feb66e-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/ccf3f38639720c63dce11c2ce2ba8f35-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/b2cb6511b3fae2fed84cd68d963adcb8-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/55732fa27d9e255c8ada6fe60135f44d-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/f488505454a3ae880986c5e8a8169bcc-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/5d64dea7a7f1c2758570058fdc8f729d-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/18ed32ec464a080c95f71c88224fb05d-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/07a4beb038d024f77ee712277afa1feb-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/c8fd420d031d21ab1eff4df9668a361d-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/302c58b77ce483555c77e154507b090c-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ed86d6f88d54e09faab677b046332e5d-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/d128ae7afd8ed001d57d91401ad5c26f-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/0f85512833c461f3f710ee9ce03740bf-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/61ec4b134cec2ed7a4a3b7fdacb015a2-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ac1885419da1537a368ee5f866a4f401-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/36ba6dcd39a37a8f75542a26da9d731f-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/3a2b6cfb6487f0fc073b9e9a0bd4c17f-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/c97e614a88d7484c65b478e9cd09c02c-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/3a208bf56949565c0eaa80d93d5fcee2-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/658012551157c5d054e915ff7c15e153-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/1230447ab98722e00a84522847cb7ffa-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/60050a3144902533c40cdbdab3e97ea8-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/d36c31de087945bc14f1846ef8d53244-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/d627c15457d29a161f13194384857d0a-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/f213b8c2c982f5cc853009d0e4744440-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/42d26f19d84f4d098b1d5b8f4fdd41e0-cc_ft_768.jpg"],
]

20.times do |index|
    listing = Listing.create!(
        address: Faker::Address.street_name,
        zipcode: Faker::Address.zip,
        description: Faker::Quote.famous_last_words,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        price: rand(500000..3000000),
        seller_id: 117,
        status: "for_sale",
        beds: rand(1..6),
        baths: rand(1..3),
        property_type: 'house',
        lat: rand(36..38),
        lng: rand(-122..123),
    )

    urls = property_urls[index]

    urls.each do |url|
        uri = URI.parse(url)
        filename = File.basename(uri.path)
        listing.images.attach(io: open(url), filename: filename)
    end


    # listing.images.attach(io: open(Faker::LoremFlickr.image(size: "300x200", search_terms: ['house'])), filename: 'house')
    # l.images.attach(io: File.open(url), filename: "house")
end

# Faker::LoremFlickr.image(size: "300x200", search_terms: ['house'])