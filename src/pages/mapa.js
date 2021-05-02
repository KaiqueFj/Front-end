import React from 'react';
import Head from 'next'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import styles from '../styles/pages/map.module.scss'

mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";


// Sample data 
const data = [
    {
        "location": "Posto de saude Santa helena",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.791957, -23.625862],
        "image": "/public/img/hospitals/maphospital.png"
    },
    {
        "location": "Hospital Family",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.750833, -23.605634],
    },
    {
        "location": "AME Taboão da Serra",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.769842, -23.619404],
    },


    {
        "location": "Greenline (Pronto Socorros) Taboão",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.767501, -23.619367],
    },


    {
        "location": "UBS Santa Cecilia",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.787187, -23.623175],
    },
    {
        "location": "Hospital Antena",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.793129, -23.628793],
    },
    {
        "location": "UBS Jd Record",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.791969, -23.625863],
    },
]


class Mapp extends React.Component {


    // Set up states for updating map 
    constructor(props) {
        super(props);
        this.state = {
            mapContainer: "my-map",
            lng: -46.79167,
            lat: -23.62611,
            zoom: 12
        }
    }

    // Create map and lay over markers
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-46.791957, -23.625862],
            zoom: 12
        })

        //nav Control
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-left');

        //locate the user by location
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );

        map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
        <div id="marker" className={styles.marker}/>
      


        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://lh3.googleusercontent.com/proxy/lioicwyp_eUIKpW_zThY7tygxdA0gMDdsyhxKm8U1PqywCylmaRq1nKhgDqpONexjd03ZZrcR39J7CrV2htQ-KuT50OaDb4)';
        el.style.width = '20px';
        el.style.height = '20px';
        console.log(map);


        //put the markers in the map
        data.forEach((location) => {
            var marker = new mapboxgl.Marker()
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 })
                    .setHTML("<h4 id='teste' >" + location.location + "</h4>" + location.city + "<br>" + location.state))
                .addTo(map);

            console.log(marker.getPopup()); // return the popup instance
            console.log(location)
        })
    }



    render() {

        return (

            <main className={styles.main}>
                <div id="my-map" className={styles.map} />
            </main>
        )
    }
}



export default Mapp;