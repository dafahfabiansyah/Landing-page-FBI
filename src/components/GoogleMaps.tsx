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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15856.670885488313!2d106.8683186!3d-6.5004403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1333e6b69b5%3A0x70e54a6025821aff!2sPT.%20FRESH%20BETON%20INDONESIA%20CABANG%20SENTUL!5e0!3m2!1sen!2sid!4v1706691732713!5m2!1sen!2sid"
            width="100%"
            height="245px"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
        ></iframe>
    );
};

export default Map;

// export default Map;
