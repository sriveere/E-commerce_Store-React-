import React from 'react'
import { Typography ,Button , List , ListItem , ListItemText  } from '@material-ui/core'
import Paymentform from './Paymentform'
import { Link } from 'react-router-dom'

import { useState , useEffect } from 'react'
const Review = ({cart , shippingData}) => {
    console.log(cart)


  return (
    <>
        <Typography variant='h6' guttterbottom="true"> Order summary </Typography>
        <List disablePadding>
            {cart.line_items.map( (product) => (
                <ListItem style = {{padding: '10px , 0'}}key={product.name}>
                    <ListItemText primary={product.name} secondary={`${product.quantity} x ${product.price.formatted_with_symbol} = ${product.line_total.formatted_with_symbol}`} />
                 </ListItem>
            )

            )}
        <ListItem style = {{padding: '10px , 0'}} >
            <ListItemText primary='Total' />
            <Typography variant = 'subtitle1' style = {{fontWeight: 700}}>
                {cart.subtotal.formatted_with_symbol}
            </Typography>
            
        </ListItem>            
        </List>
        <br />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant='outlined' component = {Link} to='/cart' color='primary'>Back to Cart</Button>
                <Button variant='contained' color='primary' type='submit'>Proceed to Pay</Button>
            </div>
    
    </>
  )
}

export default Review