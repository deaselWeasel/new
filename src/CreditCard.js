import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './CreditCard.css';
import { ReactComponent as VisaLogo } from './images/Visa.svg';

const CreditCard = ({ cardNumber, expirationDate }) => {
  const navigate = useNavigate();

  const displayCardNumber = cardNumber
    ? '•••• •••• •••• ' + cardNumber.slice(-4)
    : '•••• •••• •••• ••••';

  const handleClick = () => {
    navigate('/card');
  };

  return (
    <Card className="credit-card" bordered={false} onClick={handleClick}>
      <VisaLogo className="credit-card-logo" />
      <div className="credit-card-number">{displayCardNumber}</div>
      <div className="credit-card-expiration">Expires {expirationDate}</div>
    </Card>
  );
};

export default CreditCard;
