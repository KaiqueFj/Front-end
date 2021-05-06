import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './styles.module.scss'
import { parseCookies } from '../../utils/parseCookies';

mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";

class Mapp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -46.79167,
            lat: -23.62611,
            zoom: 12
        }
    }

    // Create map and lay over markers
    async componentDidMount(req) {

        //get token on cookies
        const { token } = parseCookies(req);

        // API connection
        const response = await fetch('http://localhost:3333/hospital/show', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });


        const responseJSON = await response.json();

        // All Medicines
        const array = [];
        for (var i = 0; i < responseJSON.length; i++) {

            // Data to show
            array.push({
                'username': responseJSON[i].username,
                'cidade': responseJSON[i].cidade,
                'estado': responseJSON[i].estado,
                "coordinates": [responseJSON[i].latitude, responseJSON[i].longitude],
                "image": responseJSON[i].image,
            })
        }

        console.log(array[0].image)

        const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-46.791957, -23.625862],
            zoom: 12
        })

        //Diretions
        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,

            unit: 'metric',
            language: 'pt-BR',
            geocoder: {
                language: 'pt-BR'
            },
        });

        //nav Control
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');

        //locate the user by location
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );

        // Show routes in map and close
        const buttonShowRoutes = document.querySelector(".styles_button__2-I_0");
        const closeButton = document.querySelector(".styles_closeButton__3bQMW");

        buttonShowRoutes.onclick = function showRoutes() {

            buttonShowRoutes.style.display = "none";
            closeButton.style.display = "block";
            map.addControl(directions, 'top-left');
        }

        closeButton.onclick = function closeRoutes() {
            buttonShowRoutes.style.display = "block";
            closeButton.style.display = "none";
            map.removeControl(directions);
        }

        //put the markers in the map
        array.forEach((location) => {
            var marker = new mapboxgl.Marker({
                color: 'var(--purple)',
                background: 'none',
                background: "url('https://image.flaticon.com/icons/png/512/504/504276.png') 100% 100%"
            })
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 })
                    .setHTML(
                        "<div id='popup'><a href='#'>" +
                        "<img src='" + location.image + "'/><div><p>Ver Mais</p></div></a><div>" +
                        "<h4 id='teste' >" + location.username + "</h4>" + location.cidade + " | " + location.estado + "</div><a href='#' class='button'>" +
                        "<button><img src='img/icons/rigthWhite.png'/></button></a></div>"))
                .addTo(map);
        })
    }


    render() {

        return (
            <div id="my-map" className={styles.map}>
                <button className={styles.button}>Como Chegar?</button>

                <button className={styles.closeButton}>
                    <img src="/img/icons/delete.jpg" alt="Fechar 'Como chegar'" />
                </button>
            </div>
        )
    }
}


export default Mapp;