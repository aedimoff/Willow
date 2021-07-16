class Markers {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingObj = {};
    listings.forEach((listing) => {
      listingObj[listing.id] = listing;
    });

    const newListingMarkers = listings.filter(
      (listing) => !this.markers[listing.id]
    );
    newListingMarkers.forEach((newListing) =>
      this.createMarker(newListing, this.handleClick)
    );
  }

  createMarker(listing) {
    const myLatLng = new google.maps.LatLng(listing.lat, listing.lng);

    const marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      listingId: listing.id,
    });

    this.markers[marker.listingId] = listing;
  
    const infowindow = new google.maps.InfoWindow({
      content:`<img height='90px' width='150px' src=${listing.imageUrls[0]} />`
          + `<p style="text-align:center; font-weight:600;" >${listing.address}</p>`
    })

    marker.addListener("mouseover", () => {infowindow.open(marker.map, marker)})
    marker.addListener("mouseout", () => {infowindow.close()})
    marker.addListener("click", () => {this.handleClick(listing);})
  }


}

export default Markers;
