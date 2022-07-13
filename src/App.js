import React, {useState , useEffect}from 'react'
import {Products , Navbar} from './components'
import { commerce } from './lib/commerce'


const App = () => {
  const [ products , setProducts ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
        <Navbar />
        <Products products = {products}/>

    </div>
  )
}

export default App