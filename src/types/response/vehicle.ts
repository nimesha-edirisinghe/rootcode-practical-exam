export interface vehicleDetailsI {
  currency: string;
  price: 20000000;
  color: string;
  brand: string;
  manufactureYear: string;
  image: string;
  description: string;
}

export interface VehicleI {
  id: string;
  name: 'T-Cross';
  details: vehicleDetailsI;
}
