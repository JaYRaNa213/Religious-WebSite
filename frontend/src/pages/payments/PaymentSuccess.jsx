import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const PaymentSuccess = () => {
  return (
    <MainLayout>
      <div className="payment-success-container">
        <h1> Payment Successful!</h1>
        <p>Thank you for your payment. Your transaction was successful.</p>
      </div>
    </MainLayout>
  );
};

export default PaymentSuccess;
