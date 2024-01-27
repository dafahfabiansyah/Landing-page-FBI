import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }: { location: { lat: number; lng: number } }) => {
    const mapStyles = {
        height: "320px",
        width: "100%",
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={location}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
