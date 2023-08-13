import { FC } from 'react';
import './BidItem.css';

interface BidItemProps {
  image: string;
  name: string;
  amount: string;
}

const BidItem: FC<BidItemProps> = ({ image, name, amount }) => {
  return (
    <main className="bid-item-container">
      <section className="bid-item__image">
        <img src={image} alt="bidedVehicle" height="100px" width="125px" />
      </section>
      <section className="bid-item__desc">
        <p>{name}</p>
        <p>
          {amount} <span>LKR</span>
        </p>
      </section>
    </main>
  );
};

export default BidItem;
