# README

# Willow
A clone of the site www.zillow.com that allows users to browse real estate listings, filter listing by location, price, and size. Users can create an account, save listings to favorites page, and upload, edit, and delete their own listings. The site also features a google map that provides map view functionality when searching and browsing listings. 

### Visit Willow at https://willowapp.herokuapp.com/

## Technologies Used
- Ruby
- Rails
- Javascript
- React
- React-redux
- CSS
- Heroku

## Features
### Property Viewing
Users can click on property cards from the listing index page in order to view more detailed information about the property. For this feature, the site utilizes a modal pop-up that allows viewers to easily exit and and navigate back to the index page without being redirected. 

<img width="1453" alt="Screen Shot 2021-06-11 at 10 12 11 AM" src="https://user-images.githubusercontent.com/76131255/121725001-88e02800-ca9d-11eb-8797-dd76ccc3b366.png">

### Map View
***Coming Soon

### Listing Creation 
Users can upload their own listing and photos through a form. 

<img width="1101" alt="Screen Shot 2021-06-11 at 10 13 54 AM" src="https://user-images.githubusercontent.com/76131255/121725260-df4d6680-ca9d-11eb-9937-e5450d0499db.png">

## Code Snippets
- Modal feature provides seamless site navigation. Willow utilizes modals for several features including user login, displying listings, and rendering input forms. By formatting modal code to accept size as a prop code can be reused to display and style modals for features of varying shapes and sizes. 

```
    return(
        <div className="modal-background" onClick={closeModal}>
            <div className={`modal ${modalSize(modal.params.size)}-modal`} 
                onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
 ```

### Future Directions 
- Place pins on map based on listing longitude and latitude to complete map view/search feature.
- Add search bar to allow users to filter listings based on price and location.
