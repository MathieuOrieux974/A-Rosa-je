import { create } from 'zustand';

const defaultPlants = [
  {
    id: 1,
    name: 'Orchidée',
    description: 'A popular indoor plant',
    address: '123 Green Street',
    city: 'Plantville',
    postalCode: '44001',
    latitude: 47.216672,
    longitude: -1.57,
    isNeedingCare: false,
    isNeedingTips: true,
    images: [
      'https://www.jardiner-malin.fr/wp-content/uploads/2022/01/orchidee-exterieur-jardin.jpg'
    ]
  },
  {
    id: 2,
    name: 'Cactus',
    description: 'A plant with potential medicinal properties',
    address: '123 Herbal Lane',
    city: 'Herbville',
    postalCode: '44001',
    latitude: 47.206672,
    longitude: -1.50,
    isNeedingCare: false,
    isNeedingTips: true,
    images: ['https://www.atypic-cactus.com/wp-content/uploads/2014/06/IMG_0866_110-640x450.jpg']
  },
  {
    id: 3,
    name: 'Snake Plant',
    description: 'A hardy indoor plant',
    address: '456 Green Street',
    city: 'Plantville',
    postalCode: '44002',
    latitude: 47.226880,
    longitude: -1.58,
    isNeedingCare: false,
    isNeedingTips: false,
    images: ['https://thewateringcan.ca/wp-content/uploads/2021/03/6-Laurentii-snake-scaled-1-scaled-scaled.jpg']
  },
  {
    id: 4,
    name: 'Spider Plant',
    description: 'A popular houseplant with striped leaves',
    address: '789 Leafy Boulevard',
    city: 'Greentown',
    postalCode: '44003',
    latitude: 47.216674,
    longitude: -1.70,
    isNeedingCare: true,
    isNeedingTips: true,
    images: [
      'https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/spider-plant_t50-ss_0.jpg?itok=T7nxutm9'
    ]
  }
];

export const usePlantsStore = create((set) => ({
  plants: defaultPlants,
  addPlant: (newPlant) => set((state) => ({ plants: [...state.plants, newPlant] })),
  updatePlant: (updatedPlant) =>
    set((state) => ({ plants: state.plants.map((plant) => (plant.id === updatedPlant.id ? updatedPlant : plant)) })),
  removePlant: (id) => set((state) => ({ plants: state.plants.filter((plant) => plant.id !== id) }))
}));
