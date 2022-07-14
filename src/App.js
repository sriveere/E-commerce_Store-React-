import React, {useState , useEffect}from 'react'
import {Products , Navbar , Cart} from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'


const App = () => {
  const [ products , setProducts ] = useState([]);
  const [cart , setCart] = useState({});
 var cartTotal;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }
  cartTotal = cart.total_items || 0;

  const handeAddToCart = async (productId , quantity) => {
    await commerce.cart.add(productId , quantity);
    setCart(await commerce.cart.retrieve());

  }
  console.log(cartTotal);
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
 
  return (
    <Router>
    <div>
        <Navbar cartTotal = {cartTotal} />
        <Routes>
          <Route exact path='/'>
        <Products products = {products} onAddtoCart = {handeAddToCart} />
          </Route>
          <Route exact path='/cart'>
        <Cart cart = {cart} />

          </Route>
        </Routes>

    </div>
    </Router>
  )
}

export default App