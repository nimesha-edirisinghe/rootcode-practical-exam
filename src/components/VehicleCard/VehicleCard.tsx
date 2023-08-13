import { FC, useState } from 'react';
import './VehicleCard.css';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

interface VehicleCardProps {
  name: string;
  image: string;
  manufactureYear: string;
  description: string;
  submitHandler: (image: string, name: string, amount: string) => void;
}

const VehicleCard: FC<VehicleCardProps> = ({
  name,
  image,
  manufactureYear,
  description,
  submitHandler,
}) => {
  const [amount, setAmount] = useState<string>('');
  return (
    <main className="card">
      <div className="image">
        <img src={image} alt="vehicleImage" width="200px" height="125px" />
      </div>
      <div className="name">
        <p className="name__brand">
          {name} {manufactureYear}
        </p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="bid">
        <Input
          label="Email"
          type="email"
          placeholder="amount"
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div className="btn">
        <Button
          variant="primary"
          onClick={() => submitHandler(image, name, amount)}
        >
          Submit
        </Button>
      </div>
    </main>
  );
};

export default VehicleCard;
