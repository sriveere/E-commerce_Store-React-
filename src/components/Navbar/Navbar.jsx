import React from 'react'
import { AppBar, Toolbar , IconButton, Badge , Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/logo.png'
import useStyles from './styles'
import { Link , useLocation} from 'react-router-dom'

const Navbar = ({cartTotal}) => {
    const classes = useStyles()
    const location = useLocation()

  return (
    <>
        <AppBar position = 'fixed' className = {classes.appBar} color = 'inherit'>
            <Toolbar>
                <Typography component = {Link} to='/' variant='h6' className={classes.title} color = 'inherit'>
                    <img src={logo} alt="Createbeyond 21" height='25px' className={classes.image}/>
                    CreateBeyond Store
                </Typography>
                <div className={classes.grow} />

                {location.pathname === '/' && (
                <div className= {classes.button}>
                    <IconButton component = {Link} to='/cart' aria-label='Show cart Items' color = 'inherit'>
                        <Badge badgeContent={cartTotal} color = 'secondary' overlap="rectangular">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}



            </Toolbar>

        </AppBar>
    </>
  )
}

export default Navbar