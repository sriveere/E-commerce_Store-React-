import React from 'react'
import { InputLabel , Select , MenuItem , Button , Grid , Typography } from '@material-ui/core'
import {useForm , FormProvider} from 'react-hook-form'
import FormInput from './FormInput'
import { Link } from 'react-router-dom'

const Addressform = ({handleNext}) => {
    const methods = useForm();
    
  return (
    <>
        <Typography variant='h6' gutterBottom> Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => handleNext(data) )}>
                <Grid container spacing={3}>
                    <FormInput required name = 'firstName' label='First name'/>
                    <FormInput required name = 'email' label='Email'/>
                    <FormInput required name = 'phoneNumber' label='Contact number'/>
                    <FormInput required name = 'pincode' label='PinCode'/>
                    <FormInput required name = 'address' label='Address'/>
                    <FormInput required name = 'city' label='City'/>
                    <FormInput required name = 'state' label='State'/>
                </Grid>

            <br />


            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant='outlined' component = {Link} to='/cart' color='primary'>Back to Cart</Button>
                <Button variant='contained' color='primary' type='submit'>Proceed to Checkout</Button>
            </div>
            </form>
        </FormProvider>
    </>
  )
}

export default Addressform