import { GoogleMap, MarkerF, LoadScriptNext } from "@react-google-maps/api";

const center = { lat: 47.6663, lng: 17.6449 };

export default function PeridentMap( {className} ) {
  return (
    <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} preventGoogleFontsLoading={true} >
      <GoogleMap zoom={16} center={center} mapContainerClassName={className}>
        <MarkerF position={center}/>
      </GoogleMap>
    </LoadScriptNext>
  );
}