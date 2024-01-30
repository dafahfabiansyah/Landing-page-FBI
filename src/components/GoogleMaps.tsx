import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Image from 'next/image';

// const Map = ({ location }: { location: { lat: number; lng: number } }) => {
//     const mapStyles = {
//         height: "320px",
//         width: "100%",
//     };

//     return (
//         // <LoadScript googleMapsApiKey="YOUR_API_KEY">
//         //     <GoogleMap
//         //         mapContainerStyle={mapStyles}
//         //         zoom={15}
//         //         center={location}
//         //     >
//         //         <Marker position={location} />
//         //     </GoogleMap>
//         // </LoadScript>
//         <Image src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.264546520391!2d106.75886095!3d-6.1887663499999945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70fd552f8e3%3A0x59972408c2ef6a6e!2sRanch%20Market%20Pesanggrahan!5e0!3m2!1sid!2sid!4v1706607027017!5m2!1sid!2sid" alt='' width="600" height="450"loading="lazy"/>
//     );
// };

const Map = ({ location }: { location: { lat: number; lng: number } }) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4961342587562!2d106.75356567366342!3d-6.198084293789607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f77305c654ff%3A0x5c50db3133a6daae!2sPT.%20FARRASINDO%20PERKASA%20-%20HEAD%20OFFICE%20(%20CONCRETE%20PUMP%20)!5e0!3m2!1sid!2sid!4v1706607589275!5m2!1sid!2sid"
            width="100%"
            height="320px"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
        ></iframe>
    );
};

export default Map;

// export default Map;
