import { useEffect } from "react";
import Maap from "./mapa";
import Head from "next/Head";

function App() {
  // useEffect(() => {

  //   function loadStyle(url) {
  //     let index  = window.document.getElementsByTagName("link")[0];
  //     let link = window.document.createElement("link");
  //     link.href = url;
  //     link.rel = 'stylesheet';
  //     index.parentNode.insertBefore(link, index);
  //   }
  //   loadStyle("https://api.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.css")

  // }, [])

  return (
    <>
      <Head>
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>
     
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Maap />
      </div>
    </>
  );
}

export default App;
