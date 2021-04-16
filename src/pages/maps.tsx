import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export default maps {
  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = {lat: -23.62611, lng: -46.79167};
  
  async function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center,
      zoom: 8
    });
    initMap()
  }