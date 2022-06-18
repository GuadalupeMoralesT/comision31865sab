import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    {/*return (
        <div style={{ backgroundColor: 'orange'}} >
            <img src='/images/cart.svg' alt='cart-widget'/>
    0*/}

    return(
        <div className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            { 0 }
            { totalQuantity }
        </div>
    
    );
}

export default CartWidget