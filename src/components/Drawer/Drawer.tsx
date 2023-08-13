import { FC } from 'react';
import { XCircle } from 'react-feather';

import './Drawer.css';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <div className="close-button">
          <XCircle onClick={onClose} size={18} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
