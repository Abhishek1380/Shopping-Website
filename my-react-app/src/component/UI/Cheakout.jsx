import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../Util/formatting";
import Input from "./Input";
import Button from "./Button";
import UserProgressContext from "./UserProgressContext";
import { useContext } from "react";
import Modal from "./Modal";
//import '../UI/Cheakout.css';
import '../Header.css';

export default function Cheakout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0
    );

    function handleCloseCheakout() {
        userProgressCtx.hideCheakout();
    }

    function handleGoToCheakout() {
        userProgressCtx.showCheakout();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        })
    }

    return (
        <Modal open={userProgressCtx.progress === 'cheakout'}>
            <form onSubmit={handleSubmit}>
                <h2>Cheakout</h2>
                <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="full-name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleCloseCheakout}>
                        Close
                    </Button>
                    <Button onClick={handleGoToCheakout}>Submit Order</Button>
                </p>
            </form>
        </Modal>

    )
}
