import React from 'react'
import { Container, Typography , Button , Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Cart = ({ cart , handleUpdateCartQuantity , handleRemoveFromCart , handleEmptyCart }) => {
    const classes = useStyles()
    const isEmpty = !cart.total_items;
    const EmptyCart = () => {
           return( 
           <Typography variant= 'subtitle1'>You Don't have any Items in Your cart Yet.. <Link to='/' className={classes.link}>Keep Shopping</Link></Typography>
    )
    }

    const FilledCart = () => {
        return(
        <>
        <Grid container spacing={3}>
            {cart.line_items.map(item => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item = {item} handleUpdateCartQuantity = {handleUpdateCartQuantity} handleRemoveFromCart = {handleRemoveFromCart} />
                    </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size='large' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component = {Link} to ="/checkout" className={classes.emptyButton} size='large' variant='contained' color='primary'>Check Out</Button>

            </div>
        </div>

        </>
    )
    }



  return (
    <Container>
        <div className= {classes.toolbar}/>
        <Typography className={classes.title} variant = "h3"gutterBottom>Your Shopping Cart</Typography>
        {isEmpty ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart