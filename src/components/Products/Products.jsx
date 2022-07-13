import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'


const products = [
    {id: 1, name: 'Product 1',  description: 'lorem ipsum 25' ,  price: '$100'},
    {id: 2, name: 'Product 2',  description: 'lorem ipsum 25' ,  price: '$200'},
    {id: 3, name: 'Product 3',  description: 'lorem ipsum 25' ,  price: '$300'},
    {id: 4, name: 'Product 4',  description: 'lorem ipsum 25' ,  price: '$400'},
    {id: 5, name: 'Product 5',  description: 'lorem ipsum 25' ,  price: '$500'},
]

const Products = () => {
    const classes = useStyles()
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing = {4} >
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md = {4} lg={3}>
                    <Product product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products