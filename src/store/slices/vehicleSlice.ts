import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootSlice } from 'store/rootState';
import { VehicleI } from 'types/response/vehicle';
import { VehicleBidedItemsI } from 'types/vehicle';

export interface IVehicle {
  vehicleData: VehicleI[];
  isLoading: boolean;
  selectedBrand: string | undefined;
  localScope: {
    drawer: boolean;
  };
  bidItems: VehicleBidedItemsI[];
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
    bidItems: [],
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
    bidItemAction: (
      state,
      action: PayloadAction<{
        image: string;
        name: string;
        amount: string;
      }>
    ) => {
      state.bidItems.push(action.payload);
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
  bidItemAction,
} = VehicleSlice.actions;

export default VehicleSlice.reducer;
