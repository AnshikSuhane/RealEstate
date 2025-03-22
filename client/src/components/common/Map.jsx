import { MapContainer, TileLayer } from "react-leaflet";
import GeoCodeMarker from "./GeoCodeMarker";

const Map = ({ city, address, country }) => {
  return (
    <MapContainer
      center={[53.35, 18.8]}
      zoom={3}
      scrollWheelZoom={false}
      style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCodeMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
