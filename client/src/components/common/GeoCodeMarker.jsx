/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import icon from "leaflet/dist/images/marker-icon.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // Responsive marker size
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const GeoCodeMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([51.505, -0.09]); // Default to a more common location (London)
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!address) return;

    ELG.geocode()
      .text(address)
      .run((err, results) => {
        if (err) {
          setError("Failed to fetch location. Please try again.");
          console.error("Geocoding error:", err);
          return;
        }

        if (results?.results?.length > 0) {
          const { lat, lng } = results.results[0].latlng;
          setPosition([lat, lng]);

          // Responsive zoom level
          const zoomLevel = window.innerWidth < 768 ? 10 : 13;
          map.flyTo([lat, lng], zoomLevel);
        } else {
          setError("Address not found. Please enter a valid location.");
        }
      });
  }, [address]);

  return (
    <>
      {error && (
        <Popup position={position}>
          <span className="text-red-600">{error}</span>
        </Popup>
      )}
      <Marker position={position} icon={DefaultIcon}>
        <Popup>{error ? error : address}</Popup>
      </Marker>
    </>
  );
};

export default GeoCodeMarker;
