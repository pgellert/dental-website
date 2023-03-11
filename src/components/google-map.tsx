import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const center = { lat: 47.6663, lng: 17.6449 };

export default function PeridentMap( {className} ) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map className={className}/>;
}

function Map( {className} ) {
  return (
    <GoogleMap zoom={16} center={center} mapContainerClassName={className}>
      <MarkerF position={center}/>
    </GoogleMap>
  );
}