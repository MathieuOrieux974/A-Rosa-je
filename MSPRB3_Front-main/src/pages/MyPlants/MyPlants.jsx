import React, { useState } from 'react';
import { Typography, Stack, IconButton, Button, Modal, Grid, TextField, Card, CardContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlantForm from '@components/plant/PlantForm/PlantForm';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { usePlantsStore } from '@stores/dataStore/PlantsStore';
import styles from './MyPlants.module.scss';

export default function MyPlant() {
  const plants = usePlantsStore((state) => state.plants);
  const removePlant = usePlantsStore((state) => state.removePlant);
  const { showSuccess } = useSnackbarStore();
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedPlantUpdate, setSelectedPlantUpdate] = useState(null);
  const [isPlantFormOpen, setIsPlantFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = () => {
    setIsPlantFormOpen(true);
  };

  const handleUpdate = (plant) => {
    setSelectedPlantUpdate(plant);
    setIsPlantFormOpen(true);
  };

  const handleDelete = (plant) => {
    removePlant(plant.id);
    showSuccess({ message: `La plante ${plant.name} a été supprimée` });
  };

  const handleClose = () => {
    setSelectedPlantUpdate(null);
    setIsPlantFormOpen(false);
  };

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
  };

  // Filtrer les plantes en fonction du terme de recherche
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container} >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} mt={1}>
        <Typography variant="h2">Mes plantes</Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Rechercher une plante"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="contained" onClick={handleOpen} className={styles.addButton}>
            Ajouter une plante
          </Button>
        </Stack>
      </Stack>
      <Stack direction="column" gap={2} sx={{ width: '100%' }}>
        {filteredPlants.map((plant) => (
          <Card
            key={plant.id}
            className={`${styles.myPlantsCard} ${selectedPlant === plant ? styles.selectedPlantCard : ''}`}
            onClick={() => handlePlantClick(plant)}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">{plant.name}</Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={() => handleUpdate(plant)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(plant)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
              <Typography variant="body1">{plant.description}</Typography>
              {selectedPlant === plant && (
                <>
                  <Grid container spacing={1} className={styles.plantDetails}>
                    <Grid item xs={12}>
                      <Typography variant="body2"><strong>Adresse:</strong> {plant.address}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2"><strong>Ville:</strong> {plant.city}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2"><strong>Code Postal:</strong> {plant.postalCode}</Typography>
                    </Grid>

                  </Grid>
                  <Stack direction="row" flexWrap="wrap" className={styles.selectedPlantImages}>
                    {selectedPlant?.images?.map((image, index) => (
                      <img
                        height={"10%"}
                        width={"10%"}
                        key={image}
                        src={image}
                        alt={`the plant ${selectedPlant?.name} ${index}`}
                        className={styles.selectedPlantImage}
                      />
                    ))}
                  </Stack>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Modal open={isPlantFormOpen} onClose={handleClose} className={styles.plantFormModal}>
        <Stack gap={3} className={styles.plantFormCard}>
          <PlantForm afterValidation={handleClose} afterCancel={handleClose} defaultPlant={selectedPlantUpdate} />
        </Stack>
      </Modal>
    </div>
  );
}
