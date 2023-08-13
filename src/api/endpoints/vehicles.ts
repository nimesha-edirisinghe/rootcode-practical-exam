import apiClient from 'api/axiosInstances/apiClient';
import { ApiResponse } from 'types/api';
import { QueryPramI } from 'types/request/vehicle';
import { VehicleI } from 'types/response/vehicle';

export const getVehiclesRequest = async (
  queryParams: QueryPramI
): Promise<ApiResponse<VehicleI[]>> => {
  try {
    const response = await apiClient.get('/vehicles', {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
