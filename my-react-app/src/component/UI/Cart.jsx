import { useContext } from 'react';
import './Cart.css';
import Modal from './Modal.jsx';
import CartContext from '../../store/CartContext.jsx';
import { currencyFormatter } from '../../Util/formatting';
import UserProgressContext from './UserProgressContext.js';
import Button from './Button.jsx';
import CartItem from './CartItem.jsx';

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const total = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    function handleGoToCheakout() {
        userProgressCtx.showCheakout();
    }
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item)}
                    />
                ))}
            </ul>
            <p className='cart-total'>{currencyFormatter.format(total)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && (
                    <Button textOnly onClick={handleGoToCheakout}>Go to Cheakout</Button>
                )}
            </p>
        </Modal>
    );
}
