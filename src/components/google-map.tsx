import { GoogleMap, MarkerF, LoadScriptNext } from "@react-google-maps/api";
import React from "react";

const center = { lat: 47.6663, lng: 17.6449 };

export default function PeridentMap( {className, defer = false} ) {
  const [showMap, setShowMap] = React.useState(false);

  React.useEffect(() => {
    // Set the map to load 5 seconds after first render
    const timeOut = setTimeout(() => setShowMap(true), defer ? 5000 : 0);

    return () => clearTimeout(timeOut);
  }, []);


  return showMap && (
    <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} preventGoogleFontsLoading={true}>
      <GoogleMap zoom={16} center={center} mapContainerClassName={className}>
        <MarkerF position={center}/>
      </GoogleMap>
    </LoadScriptNext>
  );
}