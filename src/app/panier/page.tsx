import React from 'react';
import CheckoutSteps from '~/components/features/checkout/steps';
import Footer from '~/components/features/footer';
import Cart from '~/components/features/cart';


const Page = () => {
  return (
    <>
      <CheckoutSteps step={0} />
      <Cart />
      <Footer />
    </>
  );
};

export default Page;
