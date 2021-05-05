import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './styles.module.scss'
mapboxgl.accessToken =
"pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";

const [date.setDate] = useState([])




// Sample data 
const data = [
    {
        "location": "Posto de saude Santa helena",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.791957, -23.625862],
        "image": "/img/hospitals/maphospital.png"
    },
    // {
    //     "location": "Hospital Family",
    //     "city": "Taboão da Serra",
    //     "state": "São paulo",
    //     "coordinates": [-46.750833, -23.605634],
    //     "image": "/img/hospitals/maphospital.png"
    // },
    // {
    //     "location": "Hospital Geral de Pirajussara",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.8198524, -23.6424766],
    // },
    // {
    //     "location": "Pronto Socorro Infantil Taboão da Serra",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.8198524, -23.6424766],
    // },
    // {
    //     "location": "Posto De Saúde São Judas ",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.8083511, -23.6382307],
    // },
    // {
    //     "location": "Centro de Atenção Psicossocial",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6365009, -46.8061195],
    // },
    // {
    //     "location": "Hospital Antena",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6311539, -46.8092094],
    // },

    // {
    //     "location": "Posto de saúde",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6200661, -46.7746196],
    // },
    // {
    //     "location": "UBS Dr. Akira Tada",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6286376, -46.7894683],
    // },
    // {
    //     "location": "Centro Médico Taboão da Serra",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.7949615, -23.6316257],
    // },
    // {
    //     "location": "UBS Maria José",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.7599426, -23.6126738],
    // },
    // {
    //     "location": "Centro Clínico Taboão da Serra",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6121626, -46.7621312],
    // },

    // {
    //     "location": " Clínica Médica Saúde Brasil",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6125951, -46.7616592],
    // },
    // {
    //     "location": " Policlínica Taboão",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.7611871, -23.6128704],
    // },
    // {
    //     "location": "DaVita Serviços Médicos",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.7611871, -23.612949,],
    // },
    // {
    //     "location": "Hospital e Maternidade Taboão da Serra",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.7526255, -23.6067458],
    // },
    // {
    //     "location": "Semear Gestão de serviços Hospitalares",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-23.6067458, -46.7526255],
    // },

    // {
    //     "location": "AME Taboão da Serra",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.769842, -23.619404],
    //     "image": "/img/hospitals/maphospital.png"
    // },


    // {
    //     "location": "Greenline (Pronto Socorros) Taboão",
    //     "city": "Taboão da Serra",
    //     "state": "São paulo",
    //     "coordinates": [-46.767501, -23.619367],
    //     "image": "/img/hospitals/maphospital.png"
    // },


    // {
    //     "location": "UBS Santa Cecilia",
    //     "city": "Taboão da Serra",
    //     "state": "São paulo",
    //     "coordinates": [-46.787187, -23.623175],
    //     "image": "/img/hospitals/maphospital.png"
    // },
    // {
    //     "location": "Hospital Antena",
    //     "city": "Taboão da Serra",
    //     "state": "São paulo",
    //     "coordinates": [-46.793129, -23.628793],
    //     "image": "/img/hospitals/maphospital.png"
    // },
    // {
    //     "location": "UBS Jd Record",
    //     "city": "Taboão da Serra",
    //     "state": "São paulo",
    //     "coordinates": [-46.791969, -23.625863],
    //     "image": "/img/hospitals/maphospital.png"
    // },
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
        data.forEach((location) => {
            var marker = new mapboxgl.Marker({
                color: 'var(--purple)',
                background: 'none',
                background: "url('https://image.flaticon.com/icons/png/512/504/504276.png') 100% 100%"
            })
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 })
                    .setHTML(
                        "<div id='popup'><a href='#'>" +
                        "<img src='https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/Hospital%20Municipal%20da%20Brasil%C3%A2ndia(1).jpg'/><div><p>Ver Mais</p></div></a><div>" +
                        "<h4 id='teste' >" + location.location + "</h4>" + location.city + " | " + location.state + "</div><a href='#' class='button'>" +
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