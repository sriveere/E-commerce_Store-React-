import React from 'react'
import { Paper , Stepper , Step , StepLabel , Typography , CircularProgress , Divider , Button } from '@material-ui/core'
import useStyles  from './styles'
import { useState } from 'react'
import Addressform from '../Addressform'
import Paymentform from '../Paymentform'
import Review from '../Review'
import { commerce } from '../../../lib/commerce' 

const steps = [ 'Shipping address' , 'Review' , 'Payment details']

const Checkout = () => {
    const classes = useStyles()
    const [activeStep , setActiveStep] = useState(0)
    const [ shippingData , setShippingData ] = useState({})
    const [cart , setCart] = useState({});

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

        const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
        const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
        
        
        const fetchCart = async () => {
            setCart(await commerce.cart.retrieve());
            nextStep();
        }


        const handleNext = (data) => {
            setShippingData(data)
            fetchCart();
        }
        const Form = () =>
         activeStep === 0 ?
        <Addressform handleNext = {handleNext}/>
        : <Review shippingData = {shippingData} cart = {cart}/>

  return (
    <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(step => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </Paper>

        </main>

    
    
    </>
  )
}

export default Checkout