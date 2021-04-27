import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Components/map.module.css";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
export default function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";

    
  const [pageIsMounted, setPageIsMounted] = useState(false);

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
     
      center: [-46.79167,-23.62611],
      zoom: 12.721197192553936, // starting zoom
      pitch: 45,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

  
    // Set options to marker
    var marker  = new mapboxgl.Marker()
    .setLngLat([-46.79167, -23.62611])
    .setPopup(new mapboxgl.Popup().setHTML("<h1>Taboão das Trevas!</h1>"))
    .addTo(map);
     
    console.log(marker.getPopup()); // return the popup instance

    //nav Control
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    

    console.log(map);
  }, []);

  console.log(pageIsMounted);

  return (
    <>
      <Head>
      <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"

          
        />
      </Head>

      <main className={styles.main}>
        <div id="my-map" style={{ width: "100vw", height: "100vh" }} />
      </main>
    </>
  );
}
