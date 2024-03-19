import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";

const Map = ({ location }: { location: { lat: number; lng: number } }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15856.670885488313!2d106.8683186!3d-6.5004403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1333e6b69b5%3A0x70e54a6025821aff!2sPT.%20FRESH%20BETON%20INDONESIA%20CABANG%20SENTUL!5e0!3m2!1sen!2sid!4v1706691732713!5m2!1sen!2sid"
      width="100%"
      height="245px"
      style={{ border: 0 }}
      // allowFullScreen=""
      loading="lazy"
      className="rounded-lg"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
