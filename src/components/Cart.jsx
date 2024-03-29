import React from 'react'
import { IconShoppingCartOff } from '@tabler/icons-react'
import { useCart } from '../context/CartProvider'
import EditButtons from './EditButtons'

export default function Cart() {
  const { cart, clearProductCart, getTotalCart } = useCart()

  const cartTotal = getTotalCart(cart)
  const totalArticles = cart.length

  return (
    <div className='absolute right-0 top-0 w-[300px] bg-gray-800'>
      <h1>Cart</h1>

      <ul>
        {cart.map((item,index) => {
          const newPrice =
            item.newPrice > item.price ? item.newPrice : item.price

          return (
            <li key={index}>
              <img src={item.thumbnail} alt={item.title} />
              <p>Producto: {item.title}</p>
              <p>Precio Total: {newPrice}</p>
              <p>Cantidad: x{item.quantity}</p>
              <EditButtons item={item} />
            </li>
          )
        })}
      </ul>

      <div className='mt-12'>
        <div>
          <p>Total: {cartTotal}</p>
          <h3>Articulos: {totalArticles}</h3>
        </div>
        <button onClick={clearProductCart}>
          <IconShoppingCartOff size={48} />
        </button>
      </div>
    </div>
  )
}
