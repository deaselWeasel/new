import React from 'react';
import { Card } from 'antd';
import './CreditCard.css';
import { ReactComponent as VisaLogo } from './images/Visa.svg';

const CreditCard = ({ cardNumber, cardHolder, expirationDate }) => {
  // Assuming cardNumber is a string of 16 digits
  const displayCardNumber = cardNumber
    ? '•••• •••• •••• ' + cardNumber.slice(-4)
    : '•••• •••• •••• ••••';

  return (
    <Card className="credit-card" bordered={false}>
      <VisaLogo className="credit-card-logo" />
      <div className="credit-card-number">{displayCardNumber}</div>
      <div className="credit-card-expiration">Expires {expirationDate}</div>
    </Card>
  );
};

export default CreditCard;
