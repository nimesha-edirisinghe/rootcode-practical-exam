import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootSlice } from 'store/rootState';
import { VehicleI } from 'types/response/vehicle';

export interface IVehicle {
  vehicleData: VehicleI[];
  isLoading: boolean;
  selectedBrand: string | undefined;
  localScope: {
    drawer: boolean;
  };
}

export const VehicleSlice = createSlice({
  name: 'vehicle',
  initialState: {
    vehicleData: [],
    isLoading: false,
    selectedBrand: '',
    localScope: {
      drawer: false,
    },
  } as IVehicle,
  reducers: {
    getVehiclesRequest: {
      reducer: (
        state,
        action: PayloadAction<{
          selectedBrand?: string;
        }>
      ) => {
        state.selectedBrand = action.payload.selectedBrand;
      },
      prepare: (selectedBrand?: string) => {
        return {
          payload: {
            selectedBrand,
          },
        };
      },
    },
    getVehiclesSuccess: (state, action) => {
      state.vehicleData = action.payload;
      state.isLoading = false;
    },
    getVehiclesFailure: (state) => {
      state.isLoading = false;
    },
    drawerOpenAction: (state) => {
      state.localScope.drawer = true;
    },
    drawerCloseAction: (state) => {
      state.localScope.drawer = false;
    },
  },
});

export const vehicleSliceSelector = (state: IRootSlice) => state.vehicles;

export const {
  getVehiclesRequest,
  getVehiclesSuccess,
  getVehiclesFailure,
  drawerOpenAction,
  drawerCloseAction,
} = VehicleSlice.actions;

export default VehicleSlice.reducer;
