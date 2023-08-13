import { combineReducers } from 'redux';
import { IVehicle } from './slices/vehicleSlice';

import vehicleSlice from 'store/slices/vehicleSlice';
export interface IRootSlice {
  vehicles: IVehicle;
}

export const rootReducer = combineReducers({
  vehicles: vehicleSlice,
});
