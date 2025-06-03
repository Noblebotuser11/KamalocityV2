import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationMap = () => {
  const center = {
    lat: -33.9076,
    lng: 18.5516
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  return (
    <div className="h-48 rounded-lg overflow-hidden">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMap;