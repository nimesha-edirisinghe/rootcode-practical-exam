import { FC, useEffect, useState } from 'react';
import './Home.css';
import VehicleCard from 'components/VehicleCard/VehicleCard';
import { useDispatch } from 'react-redux';
import {
  bidItemAction,
  drawerCloseAction,
  drawerOpenAction,
  getVehiclesRequest,
  vehicleSliceSelector,
} from 'store/slices/vehicleSlice';
import { useSelector } from 'react-redux';
import { VehicleI } from 'types/response/vehicle';
import DropDown from 'components/DropDown/DropDown';
import Drawer from 'components/Drawer/Drawer';
import Button from 'components/Button/Button';
import BidItem from 'components/BidItem/BidItem';
import { VehicleBidedItemsI } from 'types/vehicle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkValidation } from 'utils/validation';

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
  const BidedVehicles: VehicleBidedItemsI[] = vehicleState.bidItems;

  const brandOptions = [
    { value: 'Volkswagen', label: 'Volkswagen' },
    { value: 'Audi', label: 'Audi' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Mercedes', label: 'Mercedes' },
    { value: 'BMW', label: 'BMW' },
  ];

  console.log('Items : ', JSON.stringify(BidedVehicles));

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  const drawerOpenHandler = () => {
    dispatch(drawerOpenAction());
  };

  const drawerCloseHandler = () => {
    dispatch(drawerCloseAction());
  };

  const submitHandler = (image: string, name: string, amount: string) => {
    if (checkValidation(amount)) {
      dispatch(
        bidItemAction({
          name: name,
          image: image,
          amount: amount,
        })
      );
      toast.success('Successfully Added!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const getTotalAmount = () => {
    const amount = BidedVehicles.map((item) => item.amount);
    const total = amount.reduce((acc, current) => acc + Number(current), 0);
    return total.toLocaleString('en-US', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Drawer
        isOpen={vehicleState.localScope.drawer}
        onClose={drawerCloseHandler}
      >
        <div className="drawer-body">
          <h3 className="drawer-title">Bidding</h3>
          {BidedVehicles.map((vehicle, index) => (
            <BidItem
              image={vehicle.image}
              amount={vehicle.amount}
              name={vehicle.name}
              key={index}
            />
          ))}
          <div className="drawer-footer">
            <p>
              Total : <span>{getTotalAmount()}</span>
            </p>
          </div>
        </div>
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
            <Button variant="secondary" onClick={drawerOpenHandler}>
              View
            </Button>
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
              submitHandler={submitHandler}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
