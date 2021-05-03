import React from 'react';
import mapboxgl from 'mapbox-gl';
import styles from '../styles/pages/map.module.scss'



mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";


// Sample data 
const data = [
    // {
    //     "location": "Posto de saude Santa helena",
    //     "city": "Taboão da Serra",
    //     "state": "São Paulo",
    //     "coordinates": [-46.791957, -23.625862],
    //     "image": "/img/hospitals/maphospital.png"
    // },
    {
        "location": "Hospital Family",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.750833, -23.605634],
        image: 'img/hospitals/family.png'
    },
    {
        "location": "Hospital Geral do Pirajussara",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.810244, -23.640524],
        image: 'img/hospitals/pirajussara.jpg'

    },
    {
        "location": "Pronto Socorro Infantil Taboão da Serra",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.8198524, -23.6424766],
        image: 'img/hospitals/pronto-socorroInf.jpg'
    },
    {
        "location": "Posto De Saúde São Judas ",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.8083511, -23.6382307],
        image: 'img/hospitals/ubs_saojudas.jpg'

    },
    {
        "location": "Centro de Atenção Psicossocial",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.8061195, -23.6365009],
        image: 'img/hospitals/psisocial.jpg'

    },
    {
        "location": "Hospital Antena",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.8092094, -23.6311539],
        image: 'img/hospitals/antena.jpg'

    },


    {
        "location": "UBS Santa Cecilia",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.787187, -23.623175],
        image: 'img/hospitals/santacecilia.png'

    },

    {
        "location": "UBS Jd Record",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.791969, -23.625863],
        image: 'https://lh5.googleusercontent.com/p/AF1QipNXzlMHGRNG_3BJSMRb3_D15_8VPjPo9_BIIsDS=w426-h240-k-no'
    },

    {
        "location": "AME Taboão da Serra",
        "city": "Taboão da Serra",
        "state": "São Paulo",
        "coordinates": [-46.769797, -23.619457],
        image: 'https://i1.wp.com/taboaoemfoco.com.br/wp-content/uploads/2015/10/Ame-Taboao-da-Serra_SPDM.png?resize=610%2C232'
    },


    {
        "location": "Greenline (Pronto Socorros) Taboão",
        "city": "Taboão da Serra",
        "state": "São paulo",
        "coordinates": [-46.767501, -23.619367],
        image: 'https://www.otaboanense.com.br/wp-content/uploads/2020/12/green_line_taboao.jpg'

    },


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

        //give the directions for destination of the user

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,

                unit: 'metric',
                language: 'pt-BR',
                steps: true,
                geocoder: {
                    language: 'pt-BR'
                },
            }),
            'top-left',

        );

        //put the markers in the map
        data.forEach((location) => {


            var marker = new mapboxgl.Marker({
                color: 'var(--purple)',
                background: 'none',
            })
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 })
                    .setHTML(
                        "<div id='popup'><a href='#'>" +
                        "<img src='" + location.image + "'/>" + "<div><p>Ver Mais</p></div></a><div>" +
                        "<h4 id='teste' >" + location.location + "</h4>" + location.city + " | " + location.state + "</div><a href='#' class='button'>" +
                        "<button><img src='img/icons/rigthWhite.png'/></button></a></div>"))
                .addTo(map);

            console.log(marker.getPopup()); // return the popup instance
            console.log(location)
        })

        //`<img src=${location.image}/>`
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