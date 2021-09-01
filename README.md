Welcome to Willow
=========================
<img width="600" alt="Screen Shot 2021-09-01 at 10 33 34 AM" src="https://user-images.githubusercontent.com/76131255/131718165-e9b4a528-0dea-4efb-b85a-08e2744840bb.png">


* * * * *
### [Willow Live Site](https://willowapp.herokuapp.com/#/)

Willow is a clone of real estate site Zillow that allows user to browse housing listing, filter by location, view by location on a map, save listings as favorites, and upload for-sale-by-owner listings.

Overview
-------------------------------------------------------------------------------
Willow was built with:

* Ruby on Rails
* JSX/JavaScript
* PostgreSQL
* React
* Redux
* Active Storage
* AWS S3
* Google Maps, and Places API

Features 
-------------------------------------------------------------------------------
### Viewing Listings
<img width="1000" alt="Screen Shot 2021-09-01 at 10 52 52 AM" src="https://user-images.githubusercontent.com/76131255/131719841-576d94df-b24b-49b6-91a7-f1808fa6b216.png">

Listing views are controlled by the map, which uses Google Maps API to render the map, and Google Places API to place pins on the map based on the latitude and longitude attached to each listing. Users can scroll through listings by moving the map, or by entering a city, state, or ZIP code in the search bar. As the map view changes, an event listener is utilized to update the listings on the right hand side to display listings located within the current map bounds.

### Saving Listings
<img width="1000" alt="Screen Shot 2021-09-01 at 11 06 35 AM" src="https://user-images.githubusercontent.com/76131255/131722101-4764f516-5eae-47a1-90c1-59f25e333e0d.png">

Users can save their favorite listings for later reference. When a user clicks on the heart-shaped save icon a Redux action is triggered that adds the user's ID and the saved listing's ID to a joins table. 

When the user navigates to their "My Saved Listings" page, a custom Rails route is utilized to retrieve listings from the database using a `.where` query.

<img width="740" alt="Screen Shot 2021-09-01 at 11 19 28 AM" src="https://user-images.githubusercontent.com/76131255/131724888-7492f8ac-f98c-4b06-8cf7-eb629ba12a83.png">

### Uploading Listings

<img width="1000" alt="Screen Shot 2021-09-01 at 11 38 54 AM" src="https://user-images.githubusercontent.com/76131255/131725716-e026d73d-8cdd-4bee-9597-421e8ea06430.png">

Willow's listing creating feature utilizes a wizard-style form that creates a simplified user-experience by breaking the required input fields into multiple steps. This was accomplished by creating a single parent class component that would track user input at each stage and passing information from this component to child components that would render the required fields for each step and send user input back to the parent component. At the final step, all required information was conveniently stored in the parent component’s state and was ready to be submitted to the backend for listing creation. One of the challenges with allowing users to upload their own listings was retrieving the correct latitude and longitude necessary to connect the listing with Willow's map feature.

<img width="800" alt="Screen Shot 2021-09-01 at 11 59 56 AM" src="https://user-images.githubusercontent.com/76131255/131728560-786ec70e-5e26-48df-85ef-b99bbae433e1.png">

Google Places API was used to retrieve a latitude and longitude based on the address that was input by the user. A Google Map is then displayed, showing a pin at the position returned by the Places API. To ensure accuracy, the user is given the option to manually move the pin, which updates the latitude and longitude which is then saved to the database as the source of truth.



