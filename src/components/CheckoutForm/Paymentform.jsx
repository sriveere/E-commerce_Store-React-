import React from 'react'
import { Typography , Button , Divider } from '@material-ui/core'
import { Elements , cardElement , ElementConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const Paymentform = ({cart}) => {
  return (
    <>
      Payment with Stripe 
      {console.log('snvlsn')}   
    </>
  )
}

export default Paymentform