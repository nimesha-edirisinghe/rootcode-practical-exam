import { FC, useEffect, useState } from 'react';
import './Home.css';
import VehicleCard from 'components/VehicleCard/VehicleCard';
import { useDispatch } from 'react-redux';
import {
  drawerCloseAction,
  drawerOpenAction,
  getVehiclesRequest,
  vehicleSliceSelector,
} from 'store/slices/vehicleSlice';
import { useSelector } from 'react-redux';
import { VehicleI } from 'types/response/vehicle';
import DropDown from 'components/DropDown/DropDown';
import Drawer from 'components/Drawer/Drawer';

const Home: FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehiclesRequest(''));
  }, []);

  useEffect(() => {
    dispatch(getVehiclesRequest(selectedBrand));
  }, [selectedBrand]);

  const vehicleState = useSelector(vehicleSliceSelector);
  const VehicleData: VehicleI[] = vehicleState.vehicleData;

  const brandOptions = [
    { value: 'Volkswagen', label: 'Volkswagen' },
    { value: 'Audi', label: 'Audi' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Mercedes', label: 'Mercedes' },
    { value: 'BMW', label: 'BMW' },
  ];

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  const drawerOpenHandler = () => {
    dispatch(drawerOpenAction());
  };

  const drawerCloseHandler = () => {
    dispatch(drawerCloseAction());
  };

  return (
    <>
      <Drawer
        isOpen={vehicleState.localScope.drawer}
        onClose={drawerCloseHandler}
      >
        <div></div>
      </Drawer>
      <main className="container">
        <section className="header">
          <div className="filter">
            <DropDown
              label="Select Brand"
              options={brandOptions}
              onChange={handleGenderChange}
              value={selectedBrand}
              defaultValue="Select a Brand"
            />
          </div>
          <div className="cart">
            <button onClick={drawerOpenHandler}>cart</button>
          </div>
        </section>
        <section className="body">
          {VehicleData.map((vehicle: VehicleI) => (
            <VehicleCard
              name={vehicle.name}
              image={vehicle.details.image}
              description={vehicle.details.description}
              manufactureYear={vehicle.details.manufactureYear}
              key={vehicle.id}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
