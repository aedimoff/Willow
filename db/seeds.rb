        # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'geocoder'
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
    ["https://photos.zillowstatic.com/fp/aa0114af9fe8270c25e8e0f8ce923e9b-cc_ft_1536.jpg", "https://photos.zillowstatic.com/fp/c8ed557b604a14373ae0b9c4681c64c2-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ff442040af4ee6652e26830e912e5812-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/833217bcddfa2d5f384f34b87fba18c2-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/bab5d99485d3ba5a584fcaad4668e483-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/ce5a2259906d0afaac7db44ad43d41a7-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/0614cd3656c25fe80933c7588f93564f-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/c0110cc1438217b0e68b0738dced8608-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/5c10f79b9ddd2be484c6a06846b7c038-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/35536ec56bf1d32d46849a1e26b29e14-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/d8d3625a2d8081c537cb95194312cfa9-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/db1ddd157f3695edbb1c11c4aa5516ff-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/b84be7289c5fb608e1f4e692ed3c30da-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/cb25b69a04e269478205579902dc6adf-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/6554a55d78b8dc13f37f99b29149bcfa-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/7cdcd7780e379f9ae6a08dd66db95594-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/9751a83ab1a9e30db1c1a1ea50e4364a-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/37efa9d79492fa1620e2b248892900da-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/57872e2e88ed308327d8d56b411f43da-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/b153e13c78ca8d7b25ef7596d2f2510c-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/e7155c289928a5bbe07e21f29df207ae-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/1b79e94e8e98e64ffd9b0bc04ca564ff-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/a712a1a35a9b6b63743a79938bad857e-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/598c427bce2b190e86f230328b858895-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/5947a1acf18b492630755569bfbd5cac-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/7bb2a65d83c3e419b312418e1e400429-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/694fe82365db4de4b71623121ba12df7-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/924c3ab7603cfb55285798e50b63c018-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/9383bf9f9a58b1dcc8685d05b9e460f4-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/bb2c8604003f7a3a3347656e57b0bde2-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/db76197dde47bf673dcfef39026ec1e2-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/08bcca478c3bed13ebffba5a3acd3d0b-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/f35390479052fd26c5ae3fdde9a4645b-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/bd2874f5513511dcec490662151d1fc3-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/c4d0745b71eb8d3422ee77293e19a903-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/86ea23a01a569368290f2c72a3eb3d12-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/941f6b33787599472c9d54dda984f456-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/cde870aa95d09fe341dda0e9fd3566e8-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/cd9ab268be4fe81d7debd8e5e5f8245c-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/a63b7c6ea882e00cf8402c29cdcb2fbf-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/3021136376c396106e399467550dcef0-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/4e9012d9b81c31075cc04a5180e5389c-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/5cccc573cddb75a33257c7bd1d899084-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/775d43d031cb5a43efe06dee74658638-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/d4eb7c4a5df731d202a22c3db9af1d43-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/6b7e0c7bff41f0893fc97cb6c9c66f59-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/4671f91969defa74755edcb3f84acd84-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/4983d3bff901372a3adc48249ef7db11-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/68ad62398158c05219b947f5211b0dea-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/eb10e317a982958cecaae7ba1c359d32-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/6350d9d189ba2eceb9b979c5965bb541-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/d550e4ce5923baa8b122ce664b16cf92-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/693b41987f62919364292076c8326631-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/09e2d9aa02c421fc16b44c4bd929ca84-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/864c015f0f5f6d6ca3901a61b874b32e-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/3eab88ae9f07f2cae9499bfd1e8eaeef-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/ec40604dae5911e92ef6763ae30765f4-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/a42f02d2046804a11f8c8f794abf0510-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/8e9274d8a3ea6d618ecda61227b2ac37-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/1440854c3ee7e86d77052fccc41cf5e0-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/55001ed2230278a692d50d412f53252b-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/e7dc3b8b83064363e939545e835e6373-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/69119b6677a35f05692c54d5d6cbc8c4-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/7de5a8e2c64f99c1802b1bfb3e72fa15-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/b38924a3b29443cbc44ee1ea4ca7c8df-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/5e89b88943c4ef58a4c6692bcfa302f3-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/feda409f74751e730149912f0632f300-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/3e595cc2214d0cfc7205215dc235c966-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/ede7bb886591a2bcaa07821d9b8e58f5-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/feda409f74751e730149912f0632f300-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/ae03dd7fd434a651def203680b8fd9ab-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/dead7c95568a25cd0d247ac5eb3f6334-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/0122b7c34212201067830fc52e829c83-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/2025683be69f67b62b1edcc5f1621214-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/559c37dc9c25dca157a03fae95e192b0-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/94526c5d0c19a18264bc65cbbe95aa8c-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/d1fa0c08ede8b34a806f6808d7c440af-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/aa16acf78c930b394ea468a62fbfb3f7-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/30bf4e7d65f2977bb727f99b54303a43-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/af74a4ece5f486d1324074e6d28d300c-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/7d35c782444f186e9c11339bc8ee269a-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/5dbc8de17162272053b6107bf6365969-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/2e04d6d100120477c2c1d34ca6f8b686-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/23fff6e523739cd3ac42112ce724ecac-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/63fbf9047ed3d841663b7c5752975fb2-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/c5a7f6083de6cf1c62313c13e63c1a2c-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/9a2f7fb99cc1d8191c13accefe32c356-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/3733eb60b3c4e5cdd0bb20f7b0d1ddee-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/a80487fbffe26cdd10327a173e4dc44d-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/2ff843dc678a4d695bff408179e77c12-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/7d262f6bfe8d0277cc300459333b0b36-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/005d0c9365dce7c1c7062abe5909604f-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/4986b5bf74eb9ff9a0c24334f2b65c87-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/296aee49bd72607f4b01884baeeb4d60-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/7cf6d6f5734e6e15f8727481555a3e25-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/e1c81f661c8af9c514b6eb9f44bbeee0-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/8902d26c58cc155d5a3444a701a30354-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/97b806201ac1c214347730a1b454918c-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/97c3bfc04c47e5a10bcb34e41aac0727-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/6ed0c4812fd29233ebc1642a1a8f4f2a-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/cf7fe1191835fba88f18cb2014c99f23-cc_ft_1344.jpg", "https://photos.zillowstatic.com/fp/82635d884a3ddac38d0824c197db5dab-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/b38e5ff5df6df168869000205aac7b1f-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/0268e4b0037d57670f91cb0944127927-cc_ft_576.jpg", "https://photos.zillowstatic.com/fp/c2b83bc57c187f0d4a9f48fa253b2366-cc_ft_576.jpg"],
    ["https://photos.zillowstatic.com/fp/b4f5f03e899401674a672b7bca191159-cc_ft_1536.jpg", "https://photos.zillowstatic.com/fp/475719da4829ce0fd3c1450f2c9f7797-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/3d458eae86bbae76ef0d7fb790f9aa3f-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/1ecbaee73fe29eef6cbaa4919f91a88c-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/a296c85acc7d50676c049b8986f96415-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/69d02b084e2ea48b56216976f92b73ff-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/dc5feb2d20f7da14ce2bfbf59893a9a7-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/685666d3d4293335259c933e754ce795-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/18811dc971982161289f772f8d9a7454-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/101fe3da91cca70cad0b05afa4616b4b-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/231adf593e136307f6145f6b4f912ceb-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/24372c4315f7b159708be739143ca76a-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8fc4a21f043b897029281d3af4fdd143-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/d13fe13432e193991995702340d8500b-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/aabb5992dd30bc650e2636711696ef4d-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/5d5f2e590625cee8ce86e881299facb7-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/098a1ffad194c0bd6d8c512d8875ee92-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/766c3ceabf040ca009b6632281b0d663-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/6613335fd08d89ca76db2927c88714fb-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/e0f44bd611acded9d301c2943be9b1e8-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/0bbc3bcbc92a6993c318c2ceebbab6dd-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/2b2eae26546ec194b555b6263170faa8-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/bf6878cc323e57e37b18adac5e2763e3-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/75d065936928e3ddf454e63b764ef40e-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/9ec0836cb423b55e2dae2687b3f2bf3c-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/6a4a301a97b688c42d9cd9058f3f3e89-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/625fe84288da75047d378d5e25e6ecf5-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/c838c1c4a6a1422bba993368a56dcd25-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/13414cf44981e70f612cd33df2aa8036-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/0eb3f1ed5606844ed9aeb7cd71c3f99f-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/83231138598d1d0cbab8ca2d105a7f92-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/f08fd1fea5955bfd762fc5d07cf01c5c-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/6938a571788a4e9f1c40e392ac640360-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/ca2d9556e44a44a774f43f993af0964a-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/f3a8f93cc622e9b9c0c28d00f0bd4477-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/b21491b9d6052ef189fe285dd37a0a3f-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/839e5555f0d03ad9af2e3413365d0fbf-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/0c97d13a839fa87839c68c089f91cd04-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/029ca809b70b636852cded7d72dedceb-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/77f3ff2b9043f3227d517e3583dcd659-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/d2390625c915bcf4f193399426e607cc-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/b1cc27afac8ee5bacdac8d1e896ed79a-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8cfaec368a3afe1dded23ebfdf0a6749-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/8f6e9eae4c9091db8a3c83cc57fc033d-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/f08506d2770e262880f53dc8178b9ce6-cc_ft_768.jpg"],
    ["https://photos.zillowstatic.com/fp/cfa05dbbb419e59d20fe6b34f5a2c5dc-cc_ft_960.jpg", "https://photos.zillowstatic.com/fp/f04f6536a18ebacaf287808c6c51fec2-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/36da2cfc55def5f269d852b0d2909896-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/33242c04ff1d300cf7b2e8002d5e3368-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/a06853833a8a78b237e0f3ada87e1408-cc_ft_768.jpg"],
    # ["", "", "", "", ""],
]

1000.times do |index|
    location = Geocoder.search(Faker::Internet.ip_v4_address).first

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
        lat: location.latitude,
        lng: location.longitude,
        # lat: Faker::Number.between(from: 36.0, to: 38.0).round(6),
        # lng: Faker::Number.between(from: -122.0, to: -123.0).round(6),
        # //local_latlng(country_code='US', coords_only=True)

    )

    urls = property_urls[index % 50]

    urls.each do |url|
        uri = URI.parse(url)
        filename = File.basename(uri.path)
        listing.images.attach(io: open(url), filename: filename)
    end


    # listing.images.attach(io: open(Faker::LoremFlickr.image(size: "300x200", search_terms: ['house'])), filename: 'house')
    # l.images.attach(io: File.open(url), filename: "house")
end

# Faker::LoremFlickr.image(size: "300x200", search_terms: ['house'])




