import FilterDrawer from '@components/home/filterDrawer/FilterDrawer';
import HomeMapMarker from '@components/home/homeMapMarker/HomeMapMarker';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { usePlantsStore } from '@stores/dataStore/PlantsStore';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Home.module.scss';

export default function Home() {
  const plants = usePlantsStore((state) => state.plants);
  const mapRef = useRef();

  const defaultCenter = L.latLng(47.216671, -1.55);
  const minimalZoom = 12;

  const handlePlantCardClick = (plant) => {
    if (mapRef.current) {
      mapRef.current.flyTo(L.latLng(plant.latitude, plant.longitude), 18, { duration: 1 });
    }
  };

  return (
    <Grid container direction={{ xs: 'column-reverse', md: 'colomn' }} wrap="nowrap" className={styles.homePage}>

      <Grid container item xs={12} lg={6} justifyContent="center" alignItems="center" mb={25}>
        <MapContainer
          className={styles.mapContainer}
          center={defaultCenter}
          zoom={minimalZoom}
          placeholder={<Typography variant="body1">Ca charge, attend</Typography>}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HomeMapMarker plantes={plants} />
        </MapContainer>
      </Grid>
      <Grid item xs={4} lg={3} container direction="column" className={styles.plantsList}>
        <Stack direction="column" justifyContent="space-between">
          <Typography variant="h2">Carte des annonces</Typography>
        </Stack>
      </Grid>
      </Grid>
  );
}
