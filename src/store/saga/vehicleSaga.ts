import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from 'types/api';
import {
  getVehiclesFailure,
  getVehiclesSuccess,
} from 'store/slices/vehicleSlice';
import { VehicleI } from 'types/response/vehicle';
import { vehicleApi } from 'api';

function* getVehiclesRequest(action: PayloadAction<{ selectedBrand: string }>) {
  try {
    const { selectedBrand } = action.payload;
    const queryPram = {
      'details.brand': selectedBrand,
    };

    const response: ApiResponse<VehicleI> = yield call(() =>
      vehicleApi.getVehiclesRequest(selectedBrand.length === 0 ? {} : queryPram)
    );
    if (response) {
      yield put(getVehiclesSuccess(response));
    } else {
      yield put(getVehiclesFailure());
    }
  } catch (error) {
    console.error('error in get vehicle request ', error);
  }
}

function* userSaga() {
  yield takeEvery('vehicle/getVehiclesRequest', getVehiclesRequest);
}

export default userSaga;
