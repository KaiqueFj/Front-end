import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
export default function Map() {

    mapboxgl.accessToken = "pk.eyJ1Ijoia2FpcXVlY2FtcG9zIiwiYSI6ImNrbmtpYXQ5azA5cmIyem94dXZ5emw3ODEifQ.0-PbKJ3GjKs-tYLSLuXtjA";

    const [pageIsMounted, setPageIsMounted] = useState(false)

    useEffect(() => {
        setPageIsMounted(true)
        const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/streets-v11",
        });

        console.log(map)
    }, [])

    console.log(pageIsMounted)

    return (
        <>
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>

            <main className={styles.main}>
                <div id="my-map" style={{ height: 500, width: 500 }} />
            </main>

        </>
    )
}