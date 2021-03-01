import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeChekoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IPo2tBITppIMCima6WBh163v1h6y54mxudhRdX1hT5w30CQs0ERHq1xsK6KKowwunz38ZL95nI8b9brgYujZAXT00ZRfkKFuf';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CROWN clothing by yonibrese'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You'r total is $${price}`}
            amount={priceForStripe}
            panelLable='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeChekoutButton;