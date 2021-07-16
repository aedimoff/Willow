class Markers {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.handClick = this.handClick;
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
      this.createMarker(newListing, this.handClick)
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
      content: listing.address
    })

    marker.addListener("mouseover", () => {infowindow.open(marker.map, marker)})
    marker.addListener("mouseout", () => {infowindow.close()})
  }


}

export default Markers;
