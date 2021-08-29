import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JTgsrG2alMNIiUuw1pbQnmYOsTafBeY7d4UcWQgOoFviecrlfiRYiP2axQ3xyKQtIszeVxtxsYRIDlSUjfJgg9C005vd4FDgd';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Devhart Clothing'
      billingAddress
      shippingAddress
      image='/logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
