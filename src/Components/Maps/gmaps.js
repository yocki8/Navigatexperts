import './gmaps.css';
import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Gmaps(){
  const API_KEY="AIzaSyC6FkXwgIyVfh8HlSl4g1Nxy3wM92Iv3gM";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const cdg = useMemo(() => ({ lat: 30.7333, lng: 76.7794 }), []);
  const manali = useMemo(() => ({ lat: 32.2432, lng: 77.1892 }), []);


  return (
    <div className="main-map-cont">

      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={cdg}
          zoom={10}
        >
          <Marker position={cdg} />
          <Marker position={manali} />
        </GoogleMap>
      )}
    </div>
  );
}

export default Gmaps;