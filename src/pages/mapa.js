import React from 'react';
import Head from 'next'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";
// Sample data 
const data = [
    {
        "location": "Manhattan Ave & Norman Ave at NE corner",
        "city": "Brooklyn",
        "state": "New York",
        "coordinates": [-46.791957, -23.625862],
    },
    {
        "location": "6th Ave & 42nd St at NW corner",
        "city": "Manhattan",
        "state": "New York",
        "coordinates": [-73.98393399979334, 40.75533300052329],
    },
    {
        "location": "Essex St & Delancey St at SE corner",
        "city": "Manhattan",
        "state": "New York",
        "coordinates": [-73.9882730001973, 40.718207001246554],
    }
]


class Mapp extends React.Component {

    // Set up states for updating map 
    constructor(props) {
        super(props);
        this.state = {
            lng: -46.79167,
            lat: -23.62611,
            zoom: 12
        }
    }

    // Create map and lay over markers
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
            })
        );

        //nav Control
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-left');



        console.log(map);

        data.forEach((location) => {
            console.log(location)
            var marker = new mapboxgl.Marker()
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h4>' + location.city + '</h4>' + location.location))
                .addTo(map);

            console.log(marker.getPopup()); // return the popup instance


        })
    }


    render() {
        <Head>
            <script src='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js'></script>
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
        </Head>
        return (
            <div>
                <div ref={el => this.mapContainer = el} style={{ width: "100vw", height: "100vh" }} />
            </div>
        )
    }
}



export default Mapp;