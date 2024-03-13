import L from 'leaflet';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

HomeMapMarker.propTypes = {
  plantes: PropTypes.array.isRequired
};

export default function HomeMapMarker({ plantes }) {
  const mapRef = useMap();

  useEffect(() => {
    mapBounds();
  }, []);

  const mapBounds = () => {
    let markerBounds = mapRef.getBounds();

    plantes.forEach((marker) => {
      markerBounds.extend([marker.latitude, marker.longitude]);
    });

    mapRef.fitBounds(markerBounds);
  };

  return (
    <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
      {plantes.map((plante) => (
        <Marker position={L.latLng(plante.latitude, plante.longitude)} key={plante.id}>
          <Popup>{plante.name}</Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}
